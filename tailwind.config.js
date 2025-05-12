/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.mdx", // Root .mdx files (though index.mdx is removed)
    "./pages/**/*.mdx", // Good general pattern
    "./mcpyjama/**/*.mdx",
    "./rationale/**/*.mdx",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.mdx" // Catch-all for .mdx files one level deep
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 