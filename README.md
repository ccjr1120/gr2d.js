# Gr2d.js

### 介绍

&emsp;&emsp;旨在使用WebGpu完成2D图形的基础绘制

### 项目结构

#### @gr2d/core

&emsp;&emsp;负责调度其余模块，提供基础功能API

#### @gr2d/element 元素

&emsp;&emsp;图形只有几种，但是加入图片就扩充到元素了

#### @gr2d/data-system

&emsp;&emsp;负责维护图形数据，主要提供图层这一概念

#### @gr2d/renderer

&emsp;&emsp;负责WebGPU的渲染流程
