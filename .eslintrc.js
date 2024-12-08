module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'vuetify',
        '@vue/eslint-config-typescript',
        './.eslintrc-auto-import.json',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'vue/multi-word-component-names': 'off',
        'vue/no-empty-component-block': 'error',
        'vue/no-static-inline-styles': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/padding-line-between-tags': [
            'error',
            [{ blankLine: 'always', prev: '*', next: '*' }],
        ],
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
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
}
