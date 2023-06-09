// Copyright 2017-2023 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

const base = require('@polkadot/dev/config/eslint.cjs');

// add override for any (a metric ton of them, initial conversion)
module.exports = {
  ...base,
  ignorePatterns: [
    ...base.ignorePatterns,
    'jest/**/*',
    'scripts/**/*',
    '*.cjs'
  ],
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.eslint.json'
    ]
  },
  rules: {
    ...base.rules,
    // needs to be switched on at some point
    '@typescript-eslint/no-explicit-any': 'off',
    // this seems very broken atm, false positives
    '@typescript-eslint/unbound-method': 'off',
    "camelcase": "off",
    "deprecation/deprecation": "off",
    "@typescript-eslint/no-unsafe-assignment": 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    "no-unsafe-optional-chaining": "off", 
    "@typescript-eslint/restrict-plus-operands": "off",
  }
};
