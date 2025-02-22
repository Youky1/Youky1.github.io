---
category: 前端
tag:
  - React
---

# Hooks 相关问题

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

