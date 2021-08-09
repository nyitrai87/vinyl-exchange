module.exports = {
    extends: [
        'eslint:recommended',
        '@attilagyongyosi/eslint-config',
    ],
    env: {
        node: true
    },
    parserOptions: {
        ecmaVersion: 11
    },
    globals: {
        document: 'readonly',
        FormData: 'readonly',
        fetch: 'readonly',
        location: 'readonly'
    }
};
