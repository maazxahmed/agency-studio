import decomp from "poly-decomp";
import Matter from "matter-js";

Matter.Common.setDecomp(decomp);

export type LetterCollider = {
  body: Matter.Body;
  width: number;
  height: number;
};

const BODY_DEFAULTS = {
  friction: 0.72,
  frictionAir: 0.028,
  frictionStatic: 0.92,
  restitution: 0.06,
  density: 0.0045,
  slop: 0.02,
} satisfies Matter.IChamferableBodyDefinition;

function isSolid(data: Uint8ClampedArray, width: number, height: number, x: number, y: number) {
  if (x < 0 || y < 0 || x >= width || y >= height) return false;
  return data[(y * width + x) * 4 + 3]! > 100;
}

function simplifyPath(points: Matter.Vector[], minDistance: number): Matter.Vector[] {
  if (points.length < 3) return points;

  const simplified: Matter.Vector[] = [points[0]!];
  for (let i = 1; i < points.length; i++) {
    const prev = simplified[simplified.length - 1]!;
    const cur = points[i]!;
    const dx = cur.x - prev.x;
    const dy = cur.y - prev.y;
    if (dx * dx + dy * dy >= minDistance * minDistance) simplified.push(cur);
  }

  if (simplified.length < 3) return points.slice(0, Math.min(points.length, 120));
  return simplified.slice(0, 120);
}

function traceOutline(data: Uint8ClampedArray, width: number, height: number): Matter.Vector[] {
  let startX = -1;
  let startY = -1;

  outer: for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (isSolid(data, width, height, x, y)) {
        startX = x;
        startY = y;
        break outer;
      }
    }
  }

  if (startX < 0) return [];

  const dirs: [number, number][] = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];

  const path: Matter.Vector[] = [];
  let x = startX;
  let y = startY;
  let dir = 7;
  const guardMax = width * height * 10;
  let guard = 0;

  do {
    path.push({ x, y });

    let moved = false;
    for (let i = 0; i < 8; i++) {
      const nextDir = (dir + i) % 8;
      const nx = x + dirs[nextDir]![0]!;
      const ny = y + dirs[nextDir]![1]!;

      if (!isSolid(data, width, height, nx, ny)) continue;

      const isBoundary =
        !isSolid(data, width, height, nx - 1, ny) ||
        !isSolid(data, width, height, nx + 1, ny) ||
        !isSolid(data, width, height, nx, ny - 1) ||
        !isSolid(data, width, height, nx, ny + 1);

      if (isBoundary) {
        x = nx;
        y = ny;
        dir = (nextDir + 6) % 8;
        moved = true;
        break;
      }
    }

    if (!moved) break;
    guard += 1;
  } while ((x !== startX || y !== startY || path.length < 4) && guard < guardMax);

  return simplifyPath(path, 2.25);
}

function renderLetterCanvas(char: string, font: string) {
  const text = char === " " ? "\u00A0" : char;
  const measureCanvas = document.createElement("canvas");
  const measureCtx = measureCanvas.getContext("2d");
  if (!measureCtx) return null;

  measureCtx.font = font;
  const metrics = measureCtx.measureText(text);
  const pad = 3;
  const ascent = metrics.actualBoundingBoxAscent ?? 48;
  const descent = metrics.actualBoundingBoxDescent ?? 12;
  const width = Math.max(Math.ceil(metrics.width + pad * 2), 4);
  const height = Math.max(Math.ceil(ascent + descent + pad * 2), 4);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.font = font;
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, pad, pad + ascent);

  return { canvas, ctx, width, height, data: ctx.getImageData(0, 0, width, height).data };
}

export function createLetterCollider(
  char: string,
  font: string,
  x: number,
  y: number,
  options: Matter.IChamferableBodyDefinition = {},
): LetterCollider | null {
  const rendered = renderLetterCanvas(char, font);
  if (!rendered) return null;

  const { width, height, data } = rendered;
  const outline = traceOutline(data, width, height);
  const bodyOptions = { ...BODY_DEFAULTS, ...options };

  if (outline.length < 3) {
    const body = Matter.Bodies.rectangle(x, y, Math.max(width * 0.35, 4), height, bodyOptions);
    return { body, width, height };
  }

  const local = outline.map((point) => ({
    x: point.x - width / 2,
    y: point.y - height / 2,
  }));

  const body = Matter.Bodies.fromVertices(x, y, [local], bodyOptions, true);
  if (!body) {
    const fallback = Matter.Bodies.rectangle(x, y, width, height, bodyOptions);
    return { body: fallback, width, height };
  }

  return { body, width, height };
}

export function createWeightedLetterCollider(
  char: string,
  font: string,
  x: number,
  y: number,
  options: Matter.IChamferableBodyDefinition = {},
): LetterCollider | null {
  const collider = createLetterCollider(char, font, 0, 0, options);
  if (!collider) return null;

  const { width, height, body } = collider;
  const bob = Matter.Bodies.circle(0, height * 0.44, Math.max(width * 0.1, 6), {
    density: 0.024,
    friction: 0.58,
    restitution: 0.03,
  });

  const compound = Matter.Body.create({
    parts: [body, bob],
    friction: body.friction,
    frictionAir: body.frictionAir,
    restitution: body.restitution,
    density: body.density,
    slop: body.slop,
  });

  Matter.Body.setPosition(compound, { x, y });
  Matter.Body.setAngle(compound, (Math.random() - 0.5) * 0.05);

  return { body: compound, width, height };
}

export function getFontFromElement(element: HTMLElement) {
  const style = getComputedStyle(element);
  return `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
}
