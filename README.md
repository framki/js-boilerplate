# javascript boilerplate

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
- `yarn changelog` to create new changelog from scratch (v 1.0.0)
- `yarn lint` to check js files with eslint + prettier
- `yarn lint:write` to check js files with eslint + prettier and try to fix them
- `yarn commit` run commitizen to commit changed files
