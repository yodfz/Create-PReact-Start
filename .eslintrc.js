module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    "globals": {
        "React": true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html', 'react'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'semi': [2, 'always'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-spaced-func': 2,
        'arrow-spacing': 0,
        'indent': [2, 4, {'SwitchCase': 1}],
        'react/jsx-uses-vars': [2],
        "react/jsx-uses-react": "error"
    }
}
