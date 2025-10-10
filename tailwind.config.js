/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PenakaKred brand – tweak to your hex codes
        brandBlue:  "#1e66ff",   // primary (buttons, links)
        brandAzure: "#38bdf8",   // accents / glow
        brandGold:  "#f59e0b",   // highlights
        brandSlate: "#0f172a",   // headings / text
      },
    },
  },
  plugins: [],
};
