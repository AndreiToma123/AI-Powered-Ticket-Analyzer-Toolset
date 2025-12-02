/** @type {import ('tailwindcss').Config} */
module.exports = {
    // content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // ],
    theme: {
        extend: {
            colors: {
                primary: "#2d3436",
                secondary: "#636e72",
                accent: "#0984e3",
                background: "#f5f6fa",
                surface: "@2d3436",
                border: "#dfe6e9",
                "text-main": "#2d3436",
                "text-muted": "#636e72",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
    };
