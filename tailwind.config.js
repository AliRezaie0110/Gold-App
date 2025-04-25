const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                vazir: ['Vazir', 'sans-serif'],
            },
            colors: {
                gold: '#D4AF37',
                goldLight: '#FFD700',
                charcoal: '#1C1C1C',
                offwhite: '#F5F5F5',
                chocolate: '#4B3621',
                warmGray: '#3A3A3A',
            },
            backgroundColor: {
                'background-light': '#F9FAFB', // رنگ دقیق خودت رو بذار
            },
            borderColor: {
                'border-middle': '#E5E7EB',
            },
        },
    },
    plugins: [],
};

export default config;
