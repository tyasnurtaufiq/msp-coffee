/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#faf7f4',
                    100: '#f5efe9',
                    200: '#e8d7c8',
                    300: '#d4b5a0',
                    400: '#c09178',
                    500: '#a97250',
                    600: '#8b5a3f',
                    700: '#6d4531',
                    800: '#4f3223',
                    900: '#321f15',
                }
            }
        }
    }
}