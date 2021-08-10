module.exports = {
    extends: [
        'eslint:recommended',
        '@attilagyongyosi/eslint-config',
    ],
    env: {
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 11
    }
};
