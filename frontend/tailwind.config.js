module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            white: "#fff",
            light_pink: "#EEE5E9",
            dark: "#2B303A",
            blue: "#4D6CFA",
            red: "#E71D36",
            gray: "#777171",
            star: "#FAAF3C",
        },

        fontFamily: {
            poppins: "Poppins,sans-serif",
            openSans: "Open Sans,ans-serif",
        },
        extend: {
            boxShadow: {
                minimum: "0px 3px 48px -33px rgba(56,56,56,1)",
                umbra: " 0px 16px 24px 2px rgba(0, 0, 0, 0.14)",
                penumbra: " 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
            },
        },
    },
    plugins: [],
};
