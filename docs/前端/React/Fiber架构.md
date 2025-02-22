---
category: 前端
tag:
  - React
---

# Fiber 架构

## Fiber 的三层含义

1. 作为一种架构

v16 版本的 reconciler 采用基于 Fiber 的可中断实现，称为 Fiber Reconciler 替代了此前的递归实现。
当每一个 Fiber 对应的更新工作完成后，会查询浏览器是否属于空闲状态，如果有则继续执行，如果没有则中断，等待下一次浏览器空闲，以达到可中断更新。

2. 作为一种数据结构

每个 FiberNode 对应一个 React 元素，用于保存这个元素的信息
Fiber 树和组件树基本一一对应（有些元素没有对应的 Fiber，如文本节点、Fragment）

3. 作为一种工作单元

每个 FiberNode 用于保存本次更新中该 React 元素**变化的数据**，**要执行的工作**，如：

- flags：表示要执行的操作类型
- lanes：调度优先级
- alternate：指向双缓存机制下的另一颗 Fiber tree 中对应的节点

## Fiber 架构解决的问题

引入 Fiber 之前，React 采用 递归遍历虚拟 DOM 的方式进行 UI 计算，存在下列问题：

- react 的更新是同步、**不可中断**的，这会导致主线程阻塞，进而导致** UI 卡顿**。
- **无法区分不同类型更新的优先级**：所有组件是一次性比较 & 更新
- **无法增量渲染**：任何一次更新都会导致整个子树重建

Fiber 架构的解决方式：

- 采用 时间分片（Time Slicing），允许 React 将渲染任务拆成小块，在主线程空闲时处理
  - 旧虚拟 DOM 是递归结构，每次更新需要完整遍历整个组件树；而 Fiber 使用链表结构，每个 Fiber 节点是一个独立的任务单元，可以分步执行
- 更新任务区分了优先级，动画、输入等高优任务可以打断低优先级渲染，提升交互流畅度
- 支持增量渲染，避免无效更新
  - 通过双缓存机制，只有真正变化的 Fiber 节点才会进入更新队列，其余节点直接复用

### 双缓存机制

Fiber 架构中，会同时存在两颗 Fiber Tree，一个是当前 UI 对应的，一个是正在内存中构建的（wait in process，简称 wip），二者之间通过 alternate 指向彼此。

由于 wip 的存在，更新完成后只需最终一次性提交，可减少不必要的渲染

### 渲染的主要流程

- Render 阶段（可中断）：遍历 Fiber 树，计算变更，生成 wip Fiber 树
- Commit 阶段（不可中断）：确定变更后，一次性提交 DOM 更新
  - 保证 UI 不会出现半完成状态
  - 减少 DOM 更新次数

## useTransition

- 作用：利用架构可以区分更新优先级的特性，将某些会影响页面更新的任务标记为低优先级
- 常见使用场景：
  - 大列表搜索，为避免输入框的输入卡顿，将列表的更新

```jsx
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setQuery(e.target.value); // 立即更新输入框，不延迟

    startTransition(() => {
      const newList = Array(10000)
        .fill(0)
        .map((_, i) => e.target.value + i);
      setList(newList); // 后台更新，避免卡顿
    });
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {isPending && <p>加载中...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## useDeferredValue

获取一个值的“低优先级”版本，即当原始变量变量 `A` 改变后，使用 `deferredA` 的组件在更新时属于低优先级任务

```jsx
function SearchList({ A }) {
  const deferredA = useDeferredValue(A); // 延迟搜索查询
  const items = Array(5000)
    .fill(0)
    .map((_, i) => (
      <p key={i}>
        {deferredA}-{i}
      </p>
    ));

  return <div>{items}</div>;
}
```

和 `useTransition` 的区别：

- `useTransition` 是阻止 setState 这个动作的执行时机
- `useDeferredValue` 不阻止 setState 的执行时机，而是阻止值发生改变后，UI 更新的时机
- `useTransition` 可以获取当前是否处于 pending 状态，`useDeferredValue`不可以

二者的适用场景：核心在于 setState 这个动作执行后，所有依赖变量 A 的更新都会卡顿，还是只有一部分会卡顿

- 如果是一部分，为了让其他依赖该变量且更新不会造成阻塞的组件正常更新，选择`useDeferredValue`
  > 所有依赖 A 的更新中，只在会造成卡顿的组件内使用 `useDeferredValue` 即可
- 如果是全部，即 setState 这个动作本身就会导致卡顿，则选择 `useTransition`
