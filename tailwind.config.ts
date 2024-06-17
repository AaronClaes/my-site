import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createPreset } from "fumadocs-ui/tailwind-plugin";

export default {
  darkMode: "class",
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/content/**/*.mdx",
    "./src/mdx-components.tsx",
  ],
  presets: [createPreset({ prefix: "fuma" })],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },

  plugins: [],
} satisfies Config;
