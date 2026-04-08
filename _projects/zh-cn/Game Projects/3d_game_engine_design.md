---
layout: page
title: 3D 游戏引擎
description: 一个基于 C++ 和 SDL3 实现的 3D 游戏引擎，用于探索实时渲染、动画系统与引擎架构。
img: assets/img/engines/animation.gif
importance: 2
category: 游戏项目
---

<b>项目概述</b><br/>
该项目是一个基于 C++ 和 SDL3 开发的 3D 游戏引擎。<br/><br/>

项目最初的目标是通过实践理解引擎层各个系统的协作方式，包括场景组织与管理、模型与纹理的加载与复用、着色器与光照对画面表现的影响，以及动画、碰撞和性能分析等系统对交互与运行时表现的支撑。<br/><br/>

随着开发推进，这个引擎逐步扩展出图形渲染、游戏支持系统和开发工具链等模块。下面的开发记录展示了这一过程：从基础渲染开始，逐步发展到光照、骨骼动画、后处理效果、碰撞检测、多线程任务系统以及性能分析工具。<br/><br/>

这些系统共同构成了一个轻量且具备扩展性的引擎框架，可用于构建和测试交互式 3D 应用。<br/><br/>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/triangle.png" title="triangle img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>三角形</b><br/>
       </center>
        - 搭建基础渲染流程，包括顶点缓冲与着色器<br/>
        - 封装简单图形绘制的辅助类<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>立方体</b><br/>
        </center>
        - 实现基于顶点与索引缓冲的网格渲染<br/>
        - 添加物体变换与相机系统<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/cube.gif" title="cube gif" %}
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/texture.gif" title="texture gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>纹理</b><br/>
        </center>
        - 引入 z-buffer，实现正确的深度测试<br/>
        - 为网格添加 UV 坐标支持纹理映射<br/>
        - 将纹理数据传入着色器进行采样<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>光照</b><br/>
        </center>
        - 添加 Material 类用于描述表面属性<br/>
        - 构建点光源系统<br/>
        - 实现基于 Phong 模型的光照着色器<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/lighting.gif" title="lighting gif" %}
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/lambert.png" title="lambert shader img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Lambert / Rim / Half-Lambert 着色</b><br/>
        </center>
        - 实现 Lambert 漫反射光照模型<br/>
        - 扩展为 Half-Lambert，使光照过渡更柔和<br/>
        - 添加 Rim Light（边缘光）增强轮廓表现<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>模型与资源管理</b><br/>
        </center>
        - 构建资源管理器，实现资源复用<br/>
        - 支持基于 JSON 的场景加载<br/>
        - 引入组件系统以支持灵活的对象行为扩展<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/models.png" title="models img" %}
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/animation.gif" title="animation gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>动画系统</b><br/>
        </center>
        - 实现 Skeleton 与 BoneTransform 数据结构<br/>
        - 构建动画类控制骨骼随时间变化<br/>
        - 实现蒙皮（skinning）着色器用于角色动画<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>碰撞系统</b><br/>
       </center>
        - 实现 Physics 类，支持 AABB 与线段检测<br/>
        - 编写单元测试验证碰撞逻辑正确性<br/>
        - 为角色添加碰撞组件，实现站立与掉落行为<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/collision.gif" title="collision gif" %}
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/jobs.gif" title="jobs gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>任务系统与性能分析</b><br/>
        </center>
        - 实现计时器与性能分析工具（Profiler）<br/>
        - 将运行数据输出为 txt 与 json 文件<br/>
        - 构建多线程任务系统（Job System）<br/>
        - 使用 Chrome Tracing 可视化性能数据<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>法线贴图</b><br/>
       </center>
        - 在渲染流程中加入法线贴图支持<br/>
        - 扩展输入布局以包含切线（tangent）数据<br/>
        - 实现法线贴图着色器<br/>
        - 通过旋转物体验证效果正确性<br/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/normals.gif" title="normal maps gif" %}
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/bloom.gif" title="bloom gif" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>后处理</b><br/>
        </center>
        - 使用离屏渲染目标保存场景为纹理<br/>
        - 实现 Bloom 着色器提取高亮区域<br/>
        - 使用多分辨率缓冲进行双通道高斯模糊<br/>
        - 将 Bloom 结果与原始画面进行混合<br/>
    </div>
</div>

---

<b>我的工作内容</b><br/>
实时渲染系统与 HLSL 着色器开发<br/>
动画与碰撞系统实现<br/>
场景与资源管理系统设计<br/>
多线程任务系统与性能分析工具开发<br/>
使用 Visual Studio 进行图形调试<br/>
应用线性代数与向量数学于实时系统<br/>