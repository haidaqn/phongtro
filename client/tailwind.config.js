/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            flex: {
                1: '1 1 0%',
                2: '2 2 0%',
                3: '3 3 0%',
                4: '4 4 0%',
                5: '5 5 0%',
                6: '6 6 0%',
                7: '7 7 0%',
                8: '8 8 0%',
                9: '9 9 0%',
                10: '10 10 0%',
                11: '11 11 0%',
                12: '12 12 0%',
                13: '13 13 0%',
                14: '14 14 0%',
                15: '15 15 0%',
            },
        },
    },
    plugins: [],
};
