import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        // Base colors
        PrimaryBgLight: "#ffffff",
        PrimaryBgDark: "#000000",
        SecondaryBgLight: "#f2f2f4",
        SecondaryBgDark: "#1f2124",

        // Text colors
        PrimaryTextLight: "#000000",
        PrimaryTextDark: "#ffffff",
        SecondaryTextLight: "f2f2f4",
        SecondaryTextDark: "#c4c4c4",

        // input colors
        TextFieldDark: "#2d2e31",
        TextFieldLight: "#f2f2f4",

        // Border colors
        borderLight: "#dddddd",
        borderDark: "#444444",

        // Button colors
        buttonLight: {
          bg: "#f3f4f6",
          text: "#333333",
          hoverBg: "#e5e7eb",
          activeBg: "#d1d5db",
        },
        buttonDark: {
          bg: "#2d2d2d",
          text: "#eaeaea",
          hoverBg: "#3a3a3a",
          activeBg: "#4a4a4a",
        },

        // Accent colors (can be used for links, highlights, etc.)
        accentLight: "#2563eb", // Blue for light mode
        accentDark: "#60a5fa", // Lighter blue for dark mode

        // card colors
        cardbglight: "#111827",
        cardborderlight: "#74f793"
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
    }: {
      addBase: (styles: Record<string, any>) => void;
    }) {
      addBase({
        "*": {
          transitionProperty: "color, background-color, border-color",
          transitionDuration: "70ms",
          transitionTimingFunction: "ease-in-out",
        },

        h1: {
          fontSize: "3rem", // Example heading size
          fontWeight: "bold",
          lineHeight: "2.5rem",
        },
        h2: {
          fontSize: "2rem", // Example heading size
          fontWeight: "bold",
          lineHeight: "2.5rem",
        },
        h3: {
          fontSize: "1.5rem", // Example heading size
          fontWeight: "semibold",
          lineHeight: "2.5rem",
        },
        "@screen md": {
          h1: {
            fontSize: "4.5rem",
            lineHeight: "2.5rem",
          },
          h2: {
            fontSize: "3rem",
            lineHeight: "2.5rem",
          },
          h3: {
            fontSize: "2rem", // Example heading size
            fontWeight: "semibold",
            lineHeight: "2.5rem",
          },
        },
      });
    }),
  ],
} satisfies Config;
