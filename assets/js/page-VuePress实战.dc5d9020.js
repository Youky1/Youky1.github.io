(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{568:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-实战"}},[s._v("#")]),s._v(" VuePress 实战")]),s._v(" "),t("h2",{attrs:{id:"_0-项目初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-项目初始化"}},[s._v("#")]),s._v(" 0. 项目初始化")]),s._v(" "),t("blockquote",[t("p",[s._v("由于 2.0 目前的资料不齐全，所以采用了 npm 上下载量最多的 1.8.2 版本")])]),s._v(" "),t("ol",[t("li",[s._v("在目标目录中，npm init & npm install -D vuepress@next")]),s._v(" "),t("li",[s._v("在 package.json 的 scripts 中添加指令")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("创建.gitignore，并在其中添加 node_modules，.temp，.cache")]),s._v(" "),t("li",[s._v("创建 docs 文件夹")]),s._v(" "),t("li",[s._v("在 docs 路径下创建.vuepress 文件夹，并在.vuepress 文件夹中创建"),t("code",[s._v("config.js")]),s._v("文件")]),s._v(" "),t("li",[s._v("运行"),t("code",[s._v("npm run docs:dev")]),s._v("启动项目")])]),s._v(" "),t("h2",{attrs:{id:"_1-目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构"}},[s._v("#")]),s._v(" 1. 目录结构")]),s._v(" "),t("ul",[t("li",[s._v("docs 文件夹存放了项目的所有文件\n"),t("ul",[t("li",[s._v("vuepress 文件夹：存放了全局的配置、组件、静态资源\n"),t("ul",[t("li",[s._v("theme 文件夹：存放本地主题")]),s._v(" "),t("li",[s._v("styles 文件夹：存放样式文件\n"),t("ul",[t("li",[s._v("index.styl：将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),s._v(" "),t("li",[s._v("palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")])])]),s._v(" "),t("li",[s._v("public 文件夹：存放静态资源目录")]),s._v(" "),t("li",[s._v("templates: 存储 HTML 模板文件。\n"),t("ul",[t("li",[s._v("dev.html: 用于开发环境的 HTML 模板文件。")])])]),s._v(" "),t("li",[s._v("/config.js: 配置文件的入口文件，也可以是 YML 或 toml。")]),s._v(" "),t("li",[s._v("enhanceApp.js: 客户端应用的增强。")])])]),s._v(" "),t("li",[s._v("README.md：跟路由对应的 md 文件")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面路由"}},[s._v("#")]),s._v(" 2. 页面路由")]),s._v(" "),t("p",[s._v("docs 目录作为根路径。")]),s._v(" "),t("p",[s._v("即 docs/README.md 对应的 URL 为 / ；")]),s._v(" "),t("p",[s._v("docs/path/README.md 对应的 URL 为 /path/")]),s._v(" "),t("h2",{attrs:{id:"_3-md-语法扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-md-语法扩展"}},[s._v("#")]),s._v(" 3. md 语法扩展")]),s._v(" "),t("p",[s._v("vuePress 为 Markdown 提供了一些扩展功能：")]),s._v(" "),t("ul",[t("li",[s._v("标题锚点。在各级标题前会有一个#，点击这个#或在左侧目录中点击标题，会定位到标题所在位置")]),s._v(" "),t("li",[s._v("对相对路径、绝对路径、外链 URL 做相应的处理")]),s._v(" "),t("li",[s._v("支持 Emoji 表情")]),s._v(" "),t("li",[s._v("在 md 文件中使用"),t("code",[s._v("[[toc]]")]),s._v("渲染当前页面的目录")]),s._v(" "),t("li",[s._v("代码特定行高亮：在语言后添加"),t("code",[s._v("{1,6-8}")]),s._v("来将第一行和第 6 到 8 行额外高亮")])]),s._v(" "),t("h2",{attrs:{id:"_4-主题配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-主题配置"}},[s._v("#")]),s._v(" 4. 主题配置")]),s._v(" "),t("h3",{attrs:{id:"_1-1-默认主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-默认主题"}},[s._v("#")]),s._v(" 1.1 默认主题")]),s._v(" "),t("p",[s._v("在默认主题中提供了包括：首页、导航栏、侧边栏、搜索框等等的配置。参考"),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("即可")]),s._v(" "),t("h3",{attrs:{id:"_1-2-使用第三方主题-vuepress-thee-hope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用第三方主题-vuepress-thee-hope"}},[s._v("#")]),s._v(" 1.2 使用第三方主题：vuepress-thee-hope")]),s._v(" "),t("p",[s._v("修改 config.js，在其中引入第三方主题即可。以我使用的 vuepress-thee-hope 为例：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-theme-hope"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// own config here")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_1-3-开发自定义主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-开发自定义主题"}},[s._v("#")]),s._v(" 1.3 开发自定义主题")]),s._v(" "),t("h4",{attrs:{id:"最简实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最简实现"}},[s._v("#")]),s._v(" 最简实现")]),s._v(" "),t("p",[s._v("首先，在.vuepress 文件夹下创建 theme 文件夹，在其中编写一个"),t("strong",[s._v("Layout.vue")]),s._v("文件。")]),s._v(" "),t("h4",{attrs:{id:"引用-md-内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用-md-内容"}},[s._v("#")]),s._v(" 引用 md 内容")]),s._v(" "),t("p",[s._v("在 vue 文件中使用"),t("code",[s._v("<Content/>")]),s._v("组件引用 md 文件的内容。")]),s._v(" "),t("h4",{attrs:{id:"内容摘录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容摘录"}},[s._v("#")]),s._v(" 内容摘录")]),s._v(" "),t("p",[s._v("如果一个 markdown 文件中有一个"),t("code",[s._v("\x3c!-- more --\x3e")]),s._v("注释，则该注释之前的内容会被抓取并暴露在 $page.excerpt 属性中。")]),s._v(" "),t("h4",{attrs:{id:"应对复杂内容的约定目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应对复杂内容的约定目录结构"}},[s._v("#")]),s._v(" 应对复杂内容的约定目录结构")]),s._v(" "),t("p",[s._v("以下为 theme 文件夹下的目录：")]),s._v(" "),t("ul",[t("li",[s._v("global-components：该文件夹下的组件自动注册为全局组件")]),s._v(" "),t("li",[s._v("components：存放组件")]),s._v(" "),t("li",[s._v("layouts：存放布局组件。其中"),t("strong",[s._v("Layout.vue")]),s._v("是必须的")]),s._v(" "),t("li",[s._v("styles：全局的样式和调色板")]),s._v(" "),t("li",[s._v("templates：修改默认的模板文件")]),s._v(" "),t("li",[s._v("index.js：入口文件")]),s._v(" "),t("li",[s._v("enhanceApp.js: 主题水平的客户端增强文件")])]),s._v(" "),t("p",[s._v("所有页面都会默认引用"),t("strong",[s._v("Layout.vue")]),s._v("，并在路由找不到时引用 4"),t("strong",[s._v("04.vue")]),s._v("。")]),s._v(" "),t("p",[s._v("若要在某个页面引用其他布局组件，如在 layouts 中添加 AnotherLayout.vue，然后在其开头添加：")]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("layout: AnotherLayout\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-vuepress-thee-hope-主题的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-vuepress-thee-hope-主题的配置"}},[s._v("#")]),s._v(" 5. vuepress-thee-hope 主题的配置")]),s._v(" "),t("h3",{attrs:{id:"_5-1-导航栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-导航栏"}},[s._v("#")]),s._v(" 5.1 导航栏")]),s._v(" "),t("p",[s._v("可以包含的内容：站点名称、搜索框、 导航栏链接、多语言切换、仓库链接。")]),s._v(" "),t("p",[s._v("通过 themeConfig.logo 字段可以设置导航栏图标")]),s._v(" "),t("h4",{attrs:{id:"导航栏连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导航栏连接"}},[s._v("#")]),s._v(" 导航栏连接")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("nav")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"指南"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/zh/guide/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("icon")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"creative"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"配置"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/zh/config/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("icon")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"常见问题"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/zh/FAQ/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("icon")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"question"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("当把 link 属性替换为一个 items 数组时，会显示为下拉框。prefix 属性可以设置这些连接的共同前缀")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"常见问题"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("icon")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"question"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/basic/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("items")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/zh/item1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"_5-2-侧边栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-侧边栏"}},[s._v("#")]),s._v(" 5.2 侧边栏")]),s._v(" "),t("h4",{attrs:{id:"_5-2-1-最基本的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-最基本的配置"}},[s._v("#")]),s._v(" 5.2.1 最基本的配置")]),s._v(" "),t("p",[s._v("sidebar 传入的链接会渲染到左侧。")]),s._v(" "),t("p",[s._v("标题默认为在 frontmatter 中设置的 title。否则就用 md 中的第一个标题。或在设置中传入数组，第二个字符串会识别为标题")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sidebar")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/page-a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/page-b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title for page b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"_5-2-2-为不同页面配置不同的侧边栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-为不同页面配置不同的侧边栏"}},[s._v("#")]),s._v(" 5.2.2 为不同页面配置不同的侧边栏")]),s._v(" "),t("p",[s._v("配置是按顺序匹配的，所以默认情况要放在最后。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sideBar")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"/path1/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认情况")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h4",{attrs:{id:"_5-2-3-设置博主信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-设置博主信息"}},[s._v("#")]),s._v(" 5.2.3 设置博主信息")]),s._v(" "),t("p",[s._v("将"),t("code",[s._v("themeConfig.blog.sidebarDisplay")]),s._v('设置为"always"')]),s._v(" "),t("h3",{attrs:{id:"_5-3-页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-页面"}},[s._v("#")]),s._v(" 5.3 页面")]),s._v(" "),t("h4",{attrs:{id:"_5-3-1-文章图标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-1-文章图标"}},[s._v("#")]),s._v(" 5.3.1 文章图标")]),s._v(" "),t("p",[s._v("在页面的 frontmatter 中配置 icon 字段")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("---\nicon"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" home\n---\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_5-3-2-特定页面的自定义布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-2-特定页面的自定义布局"}},[s._v("#")]),s._v(" 5.3.2 特定页面的自定义布局")]),s._v(" "),t("p",[s._v("自定义布局的含义时，保留导航栏部分，通过自定义组件渲染区域部分。")]),s._v(" "),t("p",[s._v("在 frontMatter 中对某篇文章进行设置，将调用"),t("code",[s._v(".vuepress/components/SpecialLayout.vue")]),s._v("进行布局")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("---\nlayout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" SpecialLayout\n---\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_5-3-3-页面信息显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-页面信息显示"}},[s._v("#")]),s._v(" 5.3.3 页面信息显示")]),s._v(" "),t("p",[s._v("可以在 md 文件的 frontMatter 中设置相应的字段，自定义页面信息")]),s._v(" "),t("blockquote",[t("p",[s._v("通过 themeConfig.pageInfo: false 进行进行关闭")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("对应内容")]),s._v(" "),t("th",[s._v("页面 frontmatter 值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("‘author’")]),s._v(" "),t("td",[s._v("作者")]),s._v(" "),t("td",[s._v("author")])]),s._v(" "),t("tr",[t("td",[s._v("‘time’")]),s._v(" "),t("td",[s._v("时间")]),s._v(" "),t("td",[s._v("time")])]),s._v(" "),t("tr",[t("td",[s._v("‘category’")]),s._v(" "),t("td",[s._v("分类")]),s._v(" "),t("td",[s._v("category")])]),s._v(" "),t("tr",[t("td",[s._v("‘tag’")]),s._v(" "),t("td",[s._v("标签")]),s._v(" "),t("td",[s._v("tags")])]),s._v(" "),t("tr",[t("td",[s._v("‘visitor’")]),s._v(" "),t("td",[s._v("访问量")]),s._v(" "),t("td",[s._v("visitor（仅 Valine 可用）")])])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("author 可以在"),t("code",[s._v("themeConfig.author")]),s._v("中进行全局配置，文档中的 author 会进行覆盖")])]),s._v(" "),t("li",[t("p",[s._v("time 应为 xxxx-xx-xx 的形式")])]),s._v(" "),t("li",[t("p",[s._v("设置 category 为 xx 后，该文章会出现在路径/category/xx/分类页面的文章列表中。分类只能设置一个")])]),s._v(" "),t("li",[t("p",[s._v("tags 可以设置多个,该文章会出现在路径/tag/tag1 和/tag/tag2 页面。格式为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tags:\n    - tag1\n    - tag2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h4",{attrs:{id:"_5-3-4-页脚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-4-页脚"}},[s._v("#")]),s._v(" 5.3.4 页脚")]),s._v(" "),t("p",[s._v("页脚默认不开启显示。所以首先要设置"),t("code",[s._v("themeConfig.footer.display")]),s._v("为 true")]),s._v(" "),t("ul",[t("li",[s._v("全局设置：通过"),t("code",[s._v("themeConfig.footer")]),s._v("的"),t("code",[s._v("content")]),s._v("和"),t("code",[s._v("copyright")]),s._v("字段设置页脚内容和版权信息。")]),s._v(" "),t("li",[s._v("页面配置")])]),s._v(" "),t("h2",{attrs:{id:"_6-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-部署"}},[s._v("#")]),s._v(" 6. 部署")]),s._v(" "),t("h3",{attrs:{id:"_6-1-路径问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-路径问题"}},[s._v("#")]),s._v(" 6.1 路径问题")]),s._v(" "),t("p",[s._v("这里以部署到 github pages 为例，有两种情况：")]),s._v(" "),t("ul",[t("li",[s._v("部署到"),t("code",[s._v("<username>.github.io")]),s._v("，这种情况下不需要修改 base 字段")]),s._v(" "),t("li",[s._v("部署到"),t("code",[s._v("/<repo>/")]),s._v("，此时要把 base 字段修改为"),t("code",[s._v("/repo/")]),s._v("，前后带斜线")])]),s._v(" "),t("h3",{attrs:{id:"_6-2-自动提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-自动提交"}},[s._v("#")]),s._v(" 6.2 自动提交")]),s._v(" "),t("p",[s._v("由于 github page 只能显示 master 分支根目录下的 html，所以我们要提交的 build 后的"),t("code",[s._v("dist")]),s._v("文件夹。而每次 build 后切换目录提交的话很麻烦，因此可以写一个 shell 脚本自动执行一系列操作。")]),s._v(" "),t("blockquote",[t("p",[s._v("官方教程中是在 shell 中运行 npm 命令，但我遇到了一个 npm 的报错，因此改为在 npm 命令中运行该 sh 文件")])]),s._v(" "),t("p",[s._v("首先，创建一个 deploy.sh 文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 捕捉错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意将这里的username替换为自己的用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io.git master\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("然后修改 package.json 中的 scripts，在每次 build 后自动运行 deploy.sh：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs && sh deploy.sh"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("至此，每次 build 后，会自动将打包后的内容 push 至 github 仓库")]),s._v(" "),t("h3",{attrs:{id:"_6-3-绑定自定义域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-绑定自定义域名"}},[s._v("#")]),s._v(" 6.3 绑定自定义域名")]),s._v(" "),t("p",[s._v("这一步其实和 vuepress 无关了，就和任何 github pages 绑定域名一样的。")]),s._v(" "),t("ol",[t("li",[s._v("首先，在域名的 DNS 解析中，将域名解析到 github pages 的域名（比如：youky1.github.io）")]),s._v(" "),t("li",[s._v("在 Settings/Pages 页面的 Custom domain 中添加自己的域名")])]),s._v(" "),t("p",[s._v("完成双向绑定后，即可通过自己的域名访问到 github pages 了。")]),s._v(" "),t("p",[s._v("END！")])])}),[],!1,null,null,null);t.default=r.exports}}]);