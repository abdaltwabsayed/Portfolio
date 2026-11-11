module.exports = {
    content: [
        './src/index.html',
        './src/App.jsx',
        './src/main.jsx',
        './src/components/**/*.{js,jsx}',
        './src/data/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            maxWidth: {
                page: '1240px'
            },
            colors: {
                paper: 'var(--paper)',
                ink: 'var(--ink)',
                muted: 'var(--muted)',
                cobalt: 'var(--cobalt)',
                coral: 'var(--coral)',
                butter: 'var(--butter)'
            }
        }
    },
    plugins: []
};
