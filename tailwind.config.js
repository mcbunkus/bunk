/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            'serif': ['Vollkorn', 'Georgia', 'serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

