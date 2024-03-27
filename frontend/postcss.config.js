// postcss.config.js
module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
    }
}

// module.exports = {
//     plugins: [
//         require('postcss-nested'), // Enable CSS nesting
//         require('tailwindcss'),    // Enable Tailwind CSS
//         require('autoprefixer'),   // Add vendor prefixes to CSS
//     ],
// };
