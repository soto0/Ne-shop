module.exports = {
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['tsconfig.json']
            }
        }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        'no-debugger': 'off',
        'no-console': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-shadow': 0
    },
    plugins: ['@next/eslint-plugin-next']
};
