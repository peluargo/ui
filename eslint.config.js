import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
    eslintConfigPrettier,
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser,
            },
        },
        rules: {
            'vue/html-indent': ['error', 4, { baseIndent: 1 }],
            'vue/script-indent': ['error', 4, { baseIndent: 1 }],
            'vue/block-order': ['error', { 'order': [ 'template', 'script', 'style' ]}],
            'vue/multi-word-component-names': 'off',
            'vue/no-empty-component-block': 'error',
            'vue/no-static-inline-styles': 'error',
            'vue/padding-line-between-blocks': ['error', 'always'],
            'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],
            'vue/prefer-true-attribute-shorthand': ['error', 'always'],
            'vue/require-macro-variable-name': [
                'error',
                {
                    defineProps: 'props',
                    defineEmits: 'emit',
                    defineSlots: 'slots',
                    useSlots: 'slots',
                    useAttrs: 'attrs',
                },
            ],
            'vue/v-for-delimiter-style': ['error', 'in'],
            'vue/array-bracket-newline': ['error', { multiline: true }],
        },
    },
)
