module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2022,
    },
    env: {
        node: true,
        es6: true,
        worker: true,
        'jest/globals': true,
    },
    extends: ['eslint:recommended', 'plugin:jest/recommended'],
    plugins: ['jest'],
    rules: {
        indent: 'off',
        quotes: ['warn', 'single'],
    },
};
