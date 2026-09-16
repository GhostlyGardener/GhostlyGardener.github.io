---
layout: page
title: 3D Game Engine (TAC 485)
description: A custom 3D game engine built in C++ and SDL3, developed to explore rendering, animation, runtime systems, and engine architecture.
img: assets/img/engines/engine-cover.png
importance: 6
category: Game Projects
---

## Overview

This is a custom 3D game engine built in C++ and SDL3. I used it to explore how rendering, asset loading, animation, collision, multithreading, profiling, and gameplay systems fit together inside one runtime. The stages below follow the engine from its first rendering pipeline through the final Q*bert project.

## 1. Rendering Foundations

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="eager" path="assets/img/engines/triangle.png" title="first triangle rendered by the engine" %}</div>
  <div class="col-md-6 mt-3"><h4>Triangle</h4><ul><li>Created the initial pipeline with vertex buffers and shaders</li><li>Built helpers for drawing simple geometry</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>Mesh Rendering and Camera</h4><ul><li>Built indexed mesh rendering</li><li>Added object transforms and a camera system</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/cube.gif" title="indexed cube rendering and camera movement" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/texture.gif" title="depth testing and textured meshes" %}</div>
  <div class="col-md-6 mt-3"><h4>Depth and Textures</h4><ul><li>Added a z-buffer for correct depth testing</li><li>Added UV coordinates and texture sampling in the shader</li></ul></div>
</div>

## 2. Lighting and Scene Architecture

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>Materials and Phong Lighting</h4><ul><li>Added a material system and point lights</li><li>Built a Phong shader using light, material, and texture data</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/lighting.gif" title="Phong lighting and material properties" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/lambert.png" title="Lambert, Half-Lambert, and rim-light shaders" %}</div>
  <div class="col-md-6 mt-3"><h4>Midterm Shaders</h4><ul><li>Implemented Lambert diffuse lighting</li><li>Extended it into Half-Lambert for softer transitions</li><li>Added rim lighting to emphasize silhouettes</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>Models, Assets, and Levels</h4><ul><li>Built an asset manager to reuse loaded resources</li><li>Implemented JSON level loading and component-based scene objects</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/models.png" title="loaded models and scene objects" %}</div>
</div>

## 3. Animation and Physics

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/animation.gif" title="skeletal animation and skinning" %}</div>
  <div class="col-md-6 mt-3"><h4>Skeletal Animation</h4><ul><li>Implemented Skeleton, BoneTransform, and Animation classes</li><li>Added a skinned shader for animated models</li></ul></div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>Collision</h4><ul><li>Implemented AABBs and line segments</li><li>Added unit tests for intersection checks</li><li>Integrated platform collision and falling behavior</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/collision.gif" title="player collision and platform movement" %}</div>
</div>

## 4. Performance and Rendering Polish

### Job System and Profiling

I added timers and a profiler that export trace data to JSON, then implemented a job manager with multithreaded workers. These traces show startup resource loading and parallel animation updates.

<div class="row mb-4"><div class="col-12 mt-3">
  {% include figure.liquid loading="lazy" path="assets/img/engines/jobs_loading.png" title="startup profile showing shader, mesh, texture, and level loading" %}
  <p class="text-center text-muted"><small>Startup: shader compilation and level, mesh, and texture loading.</small></p>
</div></div>

<div class="row mb-5"><div class="col-12 mt-3">
  {% include figure.liquid loading="lazy" path="assets/img/engines/jobs_animation.png" title="parallel animation jobs and main-thread synchronization" %}
  <p class="text-center text-muted"><small>Runtime: animation jobs distributed across workers before main-thread synchronization.</small></p>
</div></div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3"><h4>Normal Mapping</h4><ul><li>Extended the input layout with tangent data</li><li>Added normal-map support and a dedicated shader</li></ul></div>
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/normals.gif" title="normal mapping under a moving light" %}</div>
</div>

<div class="row align-items-center mb-5">
  <div class="col-md-6 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/bloom.gif" title="real-time bloom post-processing" %}</div>
  <div class="col-md-6 mt-3"><h4>Post Processing: Bloom</h4><ul><li>Rendered the scene to an off-screen target</li><li>Extracted bright areas and applied multi-resolution Gaussian blur</li><li>Blended the result back into the scene every frame</li></ul></div>
</div>

## 5. Final Integration: Q*bert

<div class="row align-items-center mb-5">
  <div class="col-lg-5 mt-3"><p>The final project brought the engine systems together in a complete grid-based arcade game.</p><ul><li>Four-direction jumping and cube-state changes</li><li>Moving hazards, enemy behavior, and win/lose states</li><li>Level loading, animation, collision, camera, lighting, and gameplay in one project</li></ul></div>
  <div class="col-lg-7 mt-3">{% include figure.liquid loading="lazy" path="assets/img/engines/qbert_final.gif" title="Q*bert final project gameplay" %}</div>
</div>

---

## What I Worked On

- Real-time rendering systems and HLSL shader pipelines
- Scene, asset, animation, collision, and gameplay systems
- Multithreaded job execution and profiling workflows
- Graphics and performance debugging with Visual Studio and Chrome Tracing
- Linear algebra and vector math for real-time systems
