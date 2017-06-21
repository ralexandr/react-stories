require('babel-register');
const path = require('path');
const baseRules = require('eslint-config-airbnb-base/rules/style');
const [_, ...restricted] = baseRules.rules['no-restricted-syntax'];


module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		jsx: true,
	},
	env: {
		node: true,
		browser: true,
	},
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'compat',
	],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'react/forbid-prop-types': [1, { forbid: ['any']} ],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
		'react/no-multi-comp': 0,
		'react/jsx-closing-bracket-location': [1, 'after-props'],
		'linebreak-style': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-restricted-syntax': [2,
			...restricted.filter(r => !['ForOfStatement'].includes(r.selector)),
		],
		'no-tabs': 0,
		'indent': [2, 'tab'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-confusing-arrow': 0,
		'global-require': 0,
		'import/no-unresolved': [2, { commonjs: true }],
		'import/no-extraneous-dependencies': 0,
		'compat/compat': 2,
		"max-len": [0, 200]
	},
	settings: {
		'import/resolver': {
			polyfills: ['fetch'],
		}
	},
	globals: {},
};
