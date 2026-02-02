/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f5ff',
                    100: '#cceaff',
                    200: '#99d6ff',
                    300: '#66c1ff',
                    400: '#33adff',
                    500: '#0099ff', // Couleur principale #0099FF
                    600: '#007acc',
                    700: '#0066b3',
                    800: '#004d99',
                    900: '#003366',
                },
                // Couleurs secondaires
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444',
            }
        }
    },
    plugins: []
}