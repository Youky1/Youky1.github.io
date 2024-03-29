---
category: 浏览器
---

# V8引擎中一段JS代码的执行流程

## 生成AST（抽象语法树）

- 经过**词法分析**，将代码各个部分转换为一个个token
- 经过**语法分析**，将上一步的token转换为AST
- 生成AST之后，编译器的后续工作都是基于AST而不是源代码。

> Babel的原理：将ES6代码生成ES6的AST，然后转换为ES5的AST，然后转为ES5的代码

## 生成字节码

字节码是介于AST和机器码之间的一种代码，**与特定类型的机器无关**。

字节码需要通过解释器将其转换为机器码然后执行。

**使用字节码的原因**：机器码的体积太大，会引发内存占用问题。

## 执行代码

最终，将生成的字节码逐行执行，不会生成二进制文件。

在执行过程中，如果一段代码重复出现，V8引擎会将其标记为`热点代码`，将这部分代码编译后的机器码保存起来。

所以，代码执行的时间越久，效率就越高（因为`热点代码`变多了）