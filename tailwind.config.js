/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        extend: {
            colors: {
                'text-primary': '#fff',
                'text-secondary': '#b3b3b3',
                "primary": '#121212',
                'semi-primary': '#ffffff0a',
                "secondary": '#ffffff1f',
            },
        },
    },
    plugins: [],
});
