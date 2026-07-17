/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          foreground: "var(--color-primary-foreground)",
          soft: "var(--color-primary-soft)",
        },
        page: "var(--color-page-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          dark: "var(--color-surface-dark)",
          muted: "var(--color-surface-muted)",
        },
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        "border-muted": "var(--color-border-muted)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
          inverse: "var(--color-text-inverse)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      fontFamily: {
        sans: ["IBM Plex Sans Thai", "sans-serif"],
        ibm: ["IBM Plex Sans Thai", "sans-serif"],
      },
      borderRadius: {
        subtle: "var(--radius-subtle)",
        button: "var(--radius-button)",
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        "primary-focus": "var(--shadow-primary-focus)",
        input: "var(--shadow-input)",
      }
    },
  },
  plugins: [],
}
