/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            white: "#f7fbfc",
            black: "#1a1c24",
            grey: "#252a36",
            blue: "#4968E4",
            silver: "#9da4a6",
            theme: "",
        },
        extend: {},
    },
    plugins: [require("tailwindcss-animated")],
};
