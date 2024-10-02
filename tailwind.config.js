/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            'serif': ['Lora', 'Georgia', 'serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

