# javascript boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/framki/js-boilerplate.svg)](https://greenkeeper.io/)

includes:

- eslint
  - `.eslintrc.json` config file
- prettier
  - `.prettierrc.json` config file
- husky
- lint-staged
- commitizen

## usage guide

- `git init` - run before install husky!
- `yarn` to install packages
- `yarn lint` to check js files with eslint + prettier
- `yarn lint:write` to check js files with eslint + prettier and try to fix them
- `yarn commit` run commitizen to commit changed files
- `npm run release -- --first-release` to generate your changelog for your first release
- `yarn release` to generate changelog
