---
category: 前端
tag:
  - JS
---

# script 标签的属性

## async 和 defer

浏览器默认同步加载 script 标签中的 js 脚本，因此当脚本体积较大时，页面会出现卡死的情况。

使用 async 或 defer，可以实现异步加载。

二者的区别

- async：一旦脚本完成下载，会马上执行。**不会按 script 标签的顺序执行**。
- defer：等到整个页面的渲染正常完成（DOM 渲染结束，其他 JS 脚本执行完成），**会按 script 标签的顺序执行**。

## type="module"

添加了`type="module"`的标签内的代码可以使用 ES Module 的`import`、`export`语法

执行顺序的效果等同于`defer`属性，会等渲染完成后按标签顺序执行。

若同时也添加了`async`属性，则会按`async`的逻辑执行

## type="noModule"

用于防止 现代浏览器 加载 旧版 JavaScript 文件，配合 `type="module"` 使用，可以实现在不同的浏览器中加载不同类型的 JS 脚本（现代浏览器中使用体积更小的 EsModule 版本，低版本浏览器使用普通 JS）
