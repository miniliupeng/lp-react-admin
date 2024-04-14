# 集成 prettier

pnpm install prettier eslint-config-prettier eslint-plugin-prettier -D
.eslintrc.cjs extends 最后加入 'plugin:prettier/recommended'
配置 .prettierrc.js

# 集成 stylelint sass

pnpm install sass stylelint stylelint-config-standard-scss stylelint-config-recess-order -D

# 继承 husky commitlint lint-staged

pnpm install husky lint-staged @commitlint/cli @commitlint/config-conventional cz-git czg -D
npx husky init
pre-commit 修改为 npx lint-staged
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
.lintstagedrc.cjs

# 版本管理和changelog

pnpm install standard-version -D
