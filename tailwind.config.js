/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            white: "#f7fbfc",
            black: "#1a1c24",
            nightBlack: "#101116",
            grey: "#252a36",
            blue: "#4968E4",
            silver: "#9da4a6",
            purple: "#9491E3",
            theme: "",
        },
        screens: {
            "2xs": "320px",
            xs: "480px",
            sm: "640px", // default value
            md: "768px", // default value
            lg: "1024px", // default value
            xl: "1280px", // default value
            "2xl": "1536px", // default value
        },
        extend: {},
    },
    plugins: [require("tailwindcss-animated")],
};
