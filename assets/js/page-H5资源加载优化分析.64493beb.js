(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{637:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"h5-资源加载优化分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5-资源加载优化分析"}},[t._v("#")]),t._v(" H5 资源加载优化分析")]),t._v(" "),a("h2",{attrs:{id:"问题背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题背景"}},[t._v("#")]),t._v(" 问题背景")]),t._v(" "),a("p",[t._v("H5 页面首次加载时，由于背景图不能及时加载，会造成背景白屏现象，页面内容先于背景显示。")]),t._v(" "),a("h2",{attrs:{id:"原因分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因分析"}},[t._v("#")]),t._v(" 原因分析")]),t._v(" "),a("ol",[a("li",[t._v("背景图往往较大，比其他 UI 加载时间更长。")]),t._v(" "),a("li",[t._v("目前项目中的图片使用 "),a("code",[t._v("background-image")]),t._v(" 的形式，这在浏览器中属于低优先级资源。")])]),t._v(" "),a("blockquote",[a("p",[t._v("资源加载优先级可以在控制台中查看，"),a("code",[t._v("Priority")]),t._v(" 字段。")])]),t._v(" "),a("h2",{attrs:{id:"优化点一-图片大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化点一-图片大小"}},[t._v("#")]),t._v(" 优化点一：图片大小")]),t._v(" "),a("ol",[a("li",[t._v("将图片分割为首屏和非首屏（根据市面上手机长宽比加预留空间，判断首屏范围）。")]),t._v(" "),a("li",[t._v("将背景图从 png 格式转为 jpg 格式，并进行压缩。")])]),t._v(" "),a("h2",{attrs:{id:"优化点二-资源优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化点二-资源优先级"}},[t._v("#")]),t._v(" 优化点二：资源优先级")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("<img />")]),t._v(" 标签加载背景图。")]),t._v(" "),a("li",[t._v("设置 "),a("code",[t._v('fetchpriority="high"')]),t._v(" 提高资源加载优先级。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/33671665/1684745951804-02cb71cc-fc0c-42af-82db-d02d64408469.png",alt:"背景图优先级为High"}})]),t._v(" "),a("h2",{attrs:{id:"优化点三-响应式图像-预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化点三-响应式图像-预加载"}},[t._v("#")]),t._v(" 优化点三：响应式图像 + 预加载")]),t._v(" "),a("blockquote",[a("p",[t._v("所有现代浏览器都支持响应式图像，而仅在基于 Chromium 的浏览器中支持预加载它们。")])]),t._v(" "),a("h3",{attrs:{id:"响应式图像-srcset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式图像-srcset"}},[t._v("#")]),t._v(" 响应式图像 srcset")]),t._v(" "),a("p",[a("code",[t._v("srcset")]),t._v(" 用于"),a("strong",[t._v("响应式")]),t._v("的给图片设置地址，即"),a("em",[t._v("根据不同的屏宽，设置不同分辨率的图片")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"预加载-imagesrcset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载-imagesrcset"}},[t._v("#")]),t._v(" 预加载：imagesrcset")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.chrome.com/blog/new-in-chrome-73/#more",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 Chrome 73 开始，浏览器可以在发现标签 img 之前预加载 srcset 指定的响应图像。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为了预加载响应式图像，"),a("code",[t._v("<link>")]),t._v(" 元素新加了属性："),a("code",[t._v("imagesrcset")]),t._v(" 和 "),a("code",[t._v("imagesizes")]),t._v("。")]),t._v(" "),a("p",[t._v("它们与 "),a("code",[t._v('<link rel="preload">')]),t._v(" 一起使用，并与 "),a("code",[t._v("<img/>")]),t._v(" 元素中使用的 srcset 和 sizes 语法相匹配。")]),t._v(" "),a("p",[t._v("例如，如果想预加载指定的响应式图片：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wolf.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A rad wolf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可以通过将以下内容添加到 HTML 的 "),a("code",[t._v("<head>")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wolf.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("imagesrcset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("imagesizes")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("此时将无需等待加载完 CSS，便可以开始加载图片。")]),t._v(" "),a("h3",{attrs:{id:"优化前后加载时序对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化前后加载时序对比"}},[t._v("#")]),t._v(" 优化前后加载时序对比")]),t._v(" "),a("p",[t._v("优化前，等待所有 js 和 css 加载完才开始：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/33671665/1684825072419-23ac07c4-81a1-45d1-a3b1-25ab7b1a110c.png",alt:"优化前"}})]),t._v(" "),a("p",[t._v("优化后，js 和 css 未加载完就开始加载图片：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/33671665/1684826679761-da2a97f6-f9bc-475c-8f14-f5e98665cd1e.png",alt:"优化后"}})]),t._v(" "),a("h2",{attrs:{id:"扩展-其他关于资源加载的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-其他关于资源加载的特性"}},[t._v("#")]),t._v(" 扩展：其他关于资源加载的特性")]),t._v(" "),a("h3",{attrs:{id:"雪碧图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图"}},[t._v("#")]),t._v(" 雪碧图")]),t._v(" "),a("p",[t._v("雪碧图是指将多个小分辨率图片拼接到一张图里，以减少发起请求的次数。")]),t._v(" "),a("p",[t._v("由于 http2 增加了"),a("strong",[t._v("多路复用")]),t._v("的特性，现在已经很少使用。")]),t._v(" "),a("h3",{attrs:{id:"importance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importance"}},[t._v("#")]),t._v(" importance")]),t._v(" "),a("p",[t._v("搜搜“如何优化背景图加载速度”，很多中文文章中提到了 img 标签的 "),a("code",[t._v("important")]),t._v(" 属性：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/33671665/1684827581887-325c75a7-3e3f-4336-b812-62b0338b4a20.png",alt:"importance"}})]),t._v(" "),a("p",[t._v("但在 MDN 以及 stackoverflow 等网站搜不到相关内容。")]),t._v(" "),a("p",[t._v("MDN 中搜索 "),a("code",[t._v("importance")]),t._v("，该属性可用于 "),a("code",[t._v("link")]),t._v(" 和 "),a("code",[t._v("iframe")]),t._v(" 标签，并未表示其可用于 "),a("code",[t._v("img")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/33671665/1684827784843-d02f3ce7-9626-48e2-9556-926a4df12dfd.png?x-oss-process=image%2Fresize%2Cw_1659%2Climit_0",alt:"MDN搜索结果"}})]),t._v(" "),a("p",[t._v("暂未找到权威的具体用法。有一篇"),a("a",{attrs:{href:"https://xie.infoq.cn/article/ea042747d8863f882d249aa41",target:"_blank",rel:"noopener noreferrer"}},[t._v("描述较为相关的文章"),a("OutboundLink")],1),t._v("讲了百度 APP 中的资源调优机制，提到了该写法，但并不是通用的 web 标准；在"),a("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/performance/performace_img_resource_scheduler/",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度小程序文档"),a("OutboundLink")],1),t._v("中同样出现了该种写法，怀疑网上关于 importance 用于 HTML 中 img 标签的写法是误传。")]),t._v(" "),a("h3",{attrs:{id:"渐进式图片加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐进式图片加载"}},[t._v("#")]),t._v(" 渐进式图片加载")]),t._v(" "),a("h4",{attrs:{id:"含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#含义"}},[t._v("#")]),t._v(" 含义")]),t._v(" "),a("p",[t._v("非渐进式加载时，图片的显示是从上到下展示，也就是一点点的展示出高分辨率的图片，下方部分初始是空白。")]),t._v(" "),a("p",[t._v("渐进式加载的含义：先用低分辨率图片填充整个图片部分，然后逐渐加载为完整的高分辨率图片。")]),t._v(" "),a("h4",{attrs:{id:"实现方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方法"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),a("p",[t._v("使用 srcset 设置不同分辨率下使用的图片，当分辨率改变使用其他图片时，可以先显示低分辨率的图片，并使用 css 的 filter 加一层模糊滤镜。")]),t._v(" "),a("p",[t._v("在图片的 onLoad 事件中，去掉模糊效果。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - fetchPriority"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome 101 发布 Priority Hints，可以控制资源优先级了"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://web.dev/preload-responsive-images/#responsive-images-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preloading responsive images"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/17275452.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代图片性能优化及体验优化指南"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);