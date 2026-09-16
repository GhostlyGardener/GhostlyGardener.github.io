---
layout: page
title: 3D 游戏引擎
description: 一个基于 C++ 和 SDL3 实现的 3D 游戏引擎，用于探索实时渲染、动画系统与引擎架构。
img: assets/img/engines/engine-cover.png
importance: 6
category: 游戏项目
---

## 项目概述

这是一个使用 C++ 与 SDL3 构建的自研 3D 游戏引擎。我通过它实践实时渲染、资源加载、动画、碰撞、多线程、性能分析与玩法系统在同一运行时中的协作方式。下面按照开发阶段，从最初的渲染管线一直展示到最终的 Q*bert 项目。

## 1. 渲染基础

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="eager" path="assets/img/engines/triangle.png" title="引擎绘制的第一个三角形" %}</div>
  <div class="col-md-6 mt-3"><h4>三角形</h4><ul><li>使用顶点缓冲与着色器搭建基础渲染管线</li><li>封装简单几何体的绘制辅助类</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>网格渲染与相机</h4><ul><li>使用顶点与索引缓冲实现网格渲染</li><li>添加物体变换与相机系统</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/cube.gif" title="索引立方体渲染与相机移动" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/texture.gif" title="深度测试与纹理网格" %}</div>
  <div class="col-md-6 mt-3"><h4>深度与纹理</h4><ul><li>引入 z-buffer，实现正确的深度测试</li><li>添加 UV 坐标并在着色器中采样纹理</li></ul></div>
</div>

## 2. 光照与场景架构

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>材质与 Phong 光照</h4><ul><li>添加材质系统与点光源</li><li>构建结合光照、材质和纹理的 Phong 着色器</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/lighting.gif" title="Phong 光照与材质属性" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/lambert.png" title="Lambert、Half-Lambert 与边缘光着色器" %}</div>
  <div class="col-md-6 mt-3"><h4>期中着色器</h4><ul><li>实现 Lambert 漫反射</li><li>扩展 Half-Lambert，使明暗过渡更柔和</li><li>添加边缘光以增强物体轮廓</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>模型、资源与关卡</h4><ul><li>构建资源管理器，实现已加载资源的复用</li><li>实现 JSON 关卡加载与基于组件的场景对象</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/models.png" title="加载的模型与场景对象" %}</div>
</div>

## 3. 动画与物理

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/animation.gif" title="骨骼动画与蒙皮" %}</div>
  <div class="col-md-6 mt-3"><h4>骨骼动画</h4><ul><li>实现 Skeleton、BoneTransform 与 Animation 类</li><li>添加用于动画模型的蒙皮着色器</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>碰撞系统</h4><ul><li>实现 AABB 与线段检测</li><li>为相交检测编写单元测试</li><li>整合平台碰撞与角色掉落行为</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/collision.gif" title="角色碰撞与平台移动" %}</div>
</div>

## 4. 性能与渲染完善

### 任务系统与性能分析

我实现了计时器与性能分析工具，将追踪数据导出为 JSON，并构建了带多线程工作线程的任务管理器。下面分别展示启动资源加载与并行动画更新。

<div class="row mb-4"><div class="col-12 mt-3">
  {% include figure.liquid loading="lazy" path="assets/img/engines/jobs_loading.png" title="包含着色器、网格、纹理与关卡加载事件的启动性能记录" %}
  <p class="text-center text-muted"><small>启动阶段：着色器编译以及关卡、网格和纹理加载。</small></p>
</div></div>

<div class="row mb-5"><div class="col-12 mt-3">
  {% include figure.liquid loading="lazy" path="assets/img/engines/jobs_animation.png" title="并行动画任务与主线程同步" %}
  <p class="text-center text-muted"><small>运行阶段：动画任务分配至多个工作线程，并在主线程继续渲染前完成同步。</small></p>
</div></div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>法线贴图</h4><ul><li>扩展输入布局以支持切线数据</li><li>加入法线贴图支持与对应着色器</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/normals.gif" title="移动光源下的法线贴图效果" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/bloom.gif" title="实时 Bloom 后处理" %}</div>
  <div class="col-md-6 mt-3"><h4>Bloom 后处理</h4><ul><li>将场景渲染至离屏目标</li><li>提取高亮区域并使用多分辨率高斯模糊</li><li>每帧将 Bloom 结果混合回原始画面</li></ul></div>
</div>

## 5. 最终整合：Q*bert

<div class="row align-items-center mb-5">
  <div class="col-lg-5 mt-3"><p>期末项目将引擎的各项系统整合为一个完整的网格移动街机游戏。</p><ul><li>四方向跳跃与方块状态变化</li><li>移动障碍、敌人行为以及胜负状态</li><li>整合关卡加载、动画、碰撞、摄像机、光照与玩法系统</li></ul></div>
  <div class="col-lg-7 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/qbert_final.gif" title="Q*bert 期末项目实机演示" %}</div>
</div>

---

## 我的工作内容

- 实时渲染系统与 HLSL 着色器管线
- 场景、资源、动画、碰撞与玩法系统
- 多线程任务执行与性能分析流程
- 使用 Visual Studio 与 Chrome Tracing 进行图形和性能调试
- 应用于实时系统的线性代数与向量数学
