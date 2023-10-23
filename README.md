# ts-vite-starter

这是一个 `Vite` + `TailwindCSS` + `TypeScript` + `ESLint` + `Prettier` 的起手式

`main`分支是 Vue 项目，`use-react`分支是 React 项目

这个工程的搭建笔记可以在这里[查看](https://welives.github.io/blog/front-end/engineering/vite.html)

## 使用

```sh
pnpm install
```

### 开发模式

生成环境变量文件，并填入项目所需信息

```sh
mv example.env .env.local
```

启动开发模式

```sh
pnpm dev
```

### 打包

生成环境变量文件，并填入项目所需信息

```sh
mv example.env .env.production
```

执行打包

```sh
pnpm build
```

### 代码规范检查

```sh
pnpm lint
```

## 相关文档

- [Vite](https://cn.vitejs.dev/)
- [Vant](https://vant-ui.github.io/vant/#/zh-CN)
- [TypeScript](https://www.tslang.cn/)
- [TailwindCSS](https://tailwind.nodejs.cn/)
- [ESLint](https://eslint.nodejs.cn/)
- [Prettier](https://prettier.nodejs.cn/)
