/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                helvetica: ['var(--font-helvetica)'],
                normalidad: ['var(--font-normalidad)'],
                helvetica_normalidad: ['var(--font-helvetica), var(--font-normalidad)']
            }
        }
    },
    plugins: []
};
