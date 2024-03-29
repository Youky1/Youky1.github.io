---
category: 计算机网络
tag:
    - 应用层
    - HTTP
---

# HTTP协议的特点
> 超文本传输协议：Hyper Text Transfer Protocol


## 特点

- 灵活可扩展。包括语法上的自由（只规定了空格、换行基本格式），和传输内容的自由（可以传输文本、图片、视频等多种类型的资源）
- 可靠传输。使用TCP作为运输层协议。所以HTTP不需关心数据的丢失，也不关注TCP中的实现细节。
- 请求应答协议，且只能由客户端首先发起。
- 是一个无状态协议。每次HTTP请求都是独立的，即HTTP自身不对请求和响应之间的通信状态进行保存

## 非持续连接与持续连接

- ***持续连接***：建立一个TCP连接之后，所有数据都通过一个连接进行发送
- ***非持续连接***：一个TCP连接仅发送一次数据，完成后就关闭

持久连接的性能更佳。HTTP1.1以上默认采用持久连接。

关闭持久连接的方法：
```
Connection:cloase
```