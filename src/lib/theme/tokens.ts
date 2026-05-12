export const themeTokens = {
  colors: {
    bg: "#070b14",
    bgElevated: "#0f1729",
    bgMuted: "#121d33",
    text: "#edf2ff",
    textMuted: "#9fb0d8",
    border: "#243559",
    primary: "#7fb2ff",
    primaryStrong: "#9cc4ff",
    accent: "#9f8bff",
    success: "#2ec4b6",
  },
  spacing: {
    sectionY: "clamp(3.5rem, 8vw, 6.5rem)",
    containerX: "clamp(1rem, 3vw, 2rem)",
    containerMax: "78rem",
  },
  typography: {
    display: "clamp(2rem, 4.5vw, 4.25rem)",
    heading: "clamp(1.4rem, 2.4vw, 2.4rem)",
    body: "1rem",
    bodyLarge: "1.125rem",
  },
} as const;

export type ThemeTokens = typeof themeTokens;
