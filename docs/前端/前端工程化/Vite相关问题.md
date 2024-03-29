---
category: 前端
tag:
  - 前端工程化
  - vite
---

# Vite 相关问题

## Vite 的流程和 Webpack 的区别

### Webpack

1. 识别入口
2. 分析模块的依赖关系
3. 分析代码、转换代码、编译代码、输出代码
4. 生成打包后的产物

### Vite

> 省去了对源码的打包编译阶段

当 script 标签声明了 `type=module` 后，浏览器就会发起一个 GET 请求。Vite 做的就是劫持这些请求，对相应的文件进行整合并返回。

初次启动时，对资源进行预打包，准备好 ESM 模块。

## 和 Webpack 相比，优缺点是什么

优点：

1. 更快的构建速度、热更新速度
2. 更好的利用了浏览器，如利用浏览器的 ESM 的支持和使用 HTTP 头进行协商缓存

缺点：

1. 生态上：不如 webpack 丰富
2. 兼容性上：只支持现代浏览器，需要原生支持模块功能

## 为什么 esbuild 更快？

1. 使用 Go 编写，并编译为可执行代码
2. 不依赖其他库，自己从零开始实现所有功能，始终考虑性能问题且不需要进行数据结构的转化
