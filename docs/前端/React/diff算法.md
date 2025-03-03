---
category: 前端
tag:
  - React
---

# Diff 算法

## 为什么需要 Diff 算法

直接对比全量虚拟 DOM 的算法开销为 O(n³)，React 的启发式 DIff 算法时间复杂度降到了 O(n)

## 核心策略

- 逐层对比，只对同级别元素进行比较，跨级别元素直接销毁。
  - 优点：避免深度递归
  - 缺点：无法高效的处理跨层级元素移动
- 通过 key 来优化列表的对比，正确标识 key 时，列表元素只会移动不会销毁。使用不恰当的 key（如数组 index）会带来负优化
- 对于组件，如果前后是同一个组件则不会卸载，只是更新 props 和 state

## 基于 Fiber 的 diff 算法有什么区别

React 16+采用了 Fiber 架构，对比的内容从虚拟 DOM 的树变成了 Fiber 的链表

diff 算法的对比过程变为**可中断的**，支持了**增量渲染**
