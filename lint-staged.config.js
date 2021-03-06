/* eslint-env node */

module.exports = {
  '*.{ts,tsx,js,jsx,vue}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
    `git add --force ${filenames.join(' ')}`,
  ],
  '*.{md,json,yml,yaml}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `git add --force ${filenames.join(' ')}`,
  ],
};
