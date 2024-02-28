# 运行说明

```bash
npm run build: 构建项目, 会生成 .output 打包产物, 打包路径中不能有中文(否则可能失败)

npm run dev: 启动项目, 会生成 .nuxt 文件，是一些运行中文件

npm run generate: 可以直接生成静态文件，不开启服务器(适用于博客类项目)

npm run preview: 预览项目

npm run postinstall: 如果没有代码提示,可运行,会自动下载类型

```

# 问题

#### 自动注册的函数有红色报错

尝试 npm run postinstall 或 选中 .vue 文件后，在左下角切换 ts 版本，或者使用 takeover 模式
