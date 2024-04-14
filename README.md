# 项目规范

## 集成 prettier

pnpm install prettier eslint-config-prettier eslint-plugin-prettier -D
.eslintrc.cjs extends 最后加入 'plugin:prettier/recommended'
配置 .prettierrc.js

## 集成 stylelint sass

pnpm install sass stylelint stylelint-config-standard-scss stylelint-config-recess-order -D

## 继承 husky commitlint lint-staged

pnpm install husky lint-staged @commitlint/cli @commitlint/config-conventional cz-git czg -D
npx husky init
pre-commit 修改为 npx lint-staged
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
.lintstagedrc.cjs

## 版本管理和changelog

pnpm install standard-version -D

# 项目依赖

## 运行依赖

pnpm install react-router-dom swr zustand mockjs axios dayjs echarts nprogress ahooks use-immer antd @ant-design/icons

## 开发依赖

pnpm install @unocss/vite @unocss/preset-uno @unocss/reset @unocss/transformer-directives postcss-preset-env @types/mockjs @types/nprogress vite-plugin-svg-icons vite-plugin-progress vite-plugin-compression vite-plugin-mock@2.9.8 rollup-plugin-visualizer -D
