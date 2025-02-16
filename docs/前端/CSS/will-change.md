---
category: 前端
tag:
  - CSS
---

# will-change

## 什么是 will-change

通过 will-change 来标记即将发生改变的属性，让浏览器为这些变化提前做准备。
对于 transform、opacity 等可以触发 GPU 加速的属性效果最佳。
本身有一定的性能消耗，尤其是对于不需要频繁变化的元素，will-change 会带来不必要的内存开销。

## 常见使用场景

针对场景：复杂动画、离屏预渲染

始终设置 will-change 将会造成一定的性能浪费，因此适合在动画过程中动态添加和移除。

```css
.element {
  will-change: transform;
  transition: transform 0.3s ease;
}

.element.is-animating {
  transform: translateX(100px);
}

.element.is-animating.finished {
  will-change: unset; /* 动画完成后移除 will-change */
}
```
