/**
 * Site-wide decorative layer: large ecosystem sculptures, faded and scattered.
 * Fixed overlay; pointer-events none; sits above page fill, below header/chrome.
 */
const AMBIENT_SCULPTURES = [
  { src: "/revenue-element-new.png", className: "ambient-sculpture ambient-sculpture-1" },
  { src: "/experience-element-new.png", className: "ambient-sculpture ambient-sculpture-2" },
  { src: "/infrastructure-element-new.png", className: "ambient-sculpture ambient-sculpture-3" },
  { src: "/automation-element-new.png", className: "ambient-sculpture ambient-sculpture-4" },
  { src: "/business-impact-element.png", className: "ambient-sculpture ambient-sculpture-5" },
  { src: "/hero-element.png", className: "ambient-sculpture ambient-sculpture-6" },
] as const;

export function AmbientSculptures() {
  return (
    <div className="ambient-sculptures" aria-hidden>
      {AMBIENT_SCULPTURES.map((item) => (
        <img key={item.src} src={item.src} alt="" className={item.className} decoding="async" />
      ))}
    </div>
  );
}
