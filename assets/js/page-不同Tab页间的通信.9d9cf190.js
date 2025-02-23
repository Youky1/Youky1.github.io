(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{653:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"不同tab页间的通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同tab页间的通信"}},[t._v("#")]),t._v(" 不同Tab页间的通信")]),t._v(" "),s("h2",{attrs:{id:"tab页间有依赖关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tab页间有依赖关系"}},[t._v("#")]),t._v(" Tab页间有依赖关系")]),t._v(" "),s("p",[t._v("方法：通过"),s("code",[t._v("window.postMessage")]),t._v("进行通信。")]),t._v(" "),s("p",[s("code",[t._v("postMessage")]),t._v("函数是绑定在window全局对象上的，因此必须有一个页面（比如A）可以获取另一个页面（比如B）的window。")]),t._v(" "),s("p",[t._v("这样在B中，可以监听"),s("code",[t._v("message")]),t._v("事件，并通过回调函数参数的source获取A的window对象")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B页面")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message echo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"tab页属于同源范畴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tab页属于同源范畴"}},[t._v("#")]),t._v(" Tab页属于同源范畴")]),t._v(" "),s("p",[t._v("对于互不相关的同源页面，可以对"),s("code",[t._v("localStorage")]),t._v("进行读写来实现通信（类似IPC中的共享内存方式）。")]),t._v(" "),s("p",[t._v("为了监听另一个页面对于"),s("code",[t._v("localStorage")]),t._v("的改变，可以监听"),s("code",[t._v("window")]),t._v("的"),s("code",[t._v("storage")]),t._v("事件。")]),t._v(" "),s("h2",{attrs:{id:"tab间完全无关且非同源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tab间完全无关且非同源"}},[t._v("#")]),t._v(" Tab间完全无关且非同源")]),t._v(" "),s("p",[t._v("引入一个"),s("code",[t._v("bridge.html")]),t._v("用于桥接：")]),t._v(" "),s("ul",[s("li",[t._v("A和B分别通过iframe引入"),s("code",[t._v("bridge.html")]),t._v("，即可通过"),s("code",[t._v("postMessage")]),t._v("向该页面发送消息或接收消息")]),t._v(" "),s("li",[t._v("两个"),s("code",[t._v("bridge.html")]),t._v("间通过localStorage进行通信")])])])}),[],!1,null,null,null);s.default=e.exports}}]);