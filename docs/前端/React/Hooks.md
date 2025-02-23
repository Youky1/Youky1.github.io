---
category: 前端
tag:
  - React
---

# Hooks 相关问题

## 为什么不能在条件分支中使用 hooks

React 不会按照变量名匹配 state，而是依赖 Hooks 调用顺序来管理组件状态。

fiberNode 中通过一个链表来存储管理 hooks，每次渲染时会依次取出对应的 state（hooks 相关的数据）。如果调用顺序有变化（某个 hooks 被跳过），就会导致数据分配异常，导致 UI 异常

条件分支会导致顺序变化，从而破坏 React 的状态管理

## useState 的更新是同步还是异步的？如果是异步的

在 React 事件中触发时是异步的，会进行合并批量更新；

在原生事件中、setTimeout 等中触发，是同步的

## useReducer 和 useState 的对比，和 Redux 的对比

和 useState 对比：

- useState 适用于简单、独立的状态。
- useReducer 适用于维护多个相关状态，且需要通过复杂的逻辑来更新它们。

和 Redux 对比：

- useReducer 适用于**局部的**复杂状态管理，是**组件级别**的，不涉及跨组件共享
- Redux 适用于**全局的**复杂状态管理，是**应用级**的。使用成本更高，需要引入额外的库

## useMemo 和 React.memo 有什么区别

- React.memo 是一个 高阶组件，用于**避免无效渲染，优化函数组件性能**。当组件的 props 没有变化时，跳过组件的渲染。可以提供自定义的 props 对比函数
- useMemo 用于**缓存计算结果**，只有在依赖项的值变化时才重新计算

## useMemo 和 useCallback 有什么区别

useCallback 用于缓存**函数实例**，避免函数重复创建。减少不必要的重渲染（函数作为 props 传递给子组件时）

useCallback 实际上是 useMemo 的一个特化版本，专门用于存储函数。存储函数时建议用 useCallback，语义更清晰。

## useTransition 和 useDeferredValue 解决了什么问题？有什么区别？

- `useTransition` 是阻止 setState 这个动作的执行时机
- `useDeferredValue` 不阻止 setState 的执行时机，而是阻止值发生改变后，UI 更新的时机
- `useTransition` 可以获取当前是否处于 pending 状态，`useDeferredValue`不可以

二者的适用场景：核心在于 setState 这个动作执行后，所有依赖变量 A 的更新都会卡顿，还是只有一部分会卡顿

- 如果是一部分，为了让其他依赖该变量且更新不会造成阻塞的组件正常更新，选择`useDeferredValue`
  > 所有依赖 A 的更新中，只在会造成卡顿的组件内使用 `useDeferredValue` 即可
- 如果是全部，即 setState 这个动作本身就会导致卡顿，则选择 `useTransition`

## useEffect 与 useLayoutEffect 的区别

- 执行时机上：
  - useLayoutEffect 的执行时机更早，在**DOM 变更后但绘制前**
  - useEffect 在**绘制后**
- 对渲染的阻塞上：
  - useLayoutEffect 会阻塞渲染
  - useEffect 不会阻塞渲染
- 读取 DOM 操作时：二者拿到的都是更新后的 DOM
- 适用场景：
  - useLayoutEffect 适用于需要在绘制前同步处理 DOM，如测量 DOM、避免 UI 闪烁
    - 如：组件渲染后，获取某个 DOM 元素的宽高或位置信息，并基于此调整布局。useLayoutEffect 内使用 setState 修改状态，会跳过前一次绘制阶段，直接进入重新渲染阶段
    - 如果使用 useEffect 则会出现闪烁，因为执行时已经绘制完成
  - useEffect 适用于网络请求、订阅事件、操作非 UI 逻辑
