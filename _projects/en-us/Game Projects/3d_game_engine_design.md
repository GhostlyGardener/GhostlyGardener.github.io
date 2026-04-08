---
layout: page
title: 3D Game Engine
description: A custom 3D game engine built in C++ and SDL3, developed as a sandbox for exploring real-time rendering, animation, runtime systems, and engine architecture.
img: assets/img/engines/animation.gif
importance: 2
category: Game Projects
---

<b>Overview</b><br/>
This project is a custom 3D game engine built in C++ and SDL3. Rather than focusing on a single game, it was developed as a technical sandbox for exploring how core real-time systems work together inside a unified runtime framework.<br/><br/>

The project began as an effort to better understand engine-level architecture through practice: how scenes are built and organized, how models and textures are loaded and reused, how shaders and lighting affect the final image, how animation and collision support interactivity, and how performance can be tracked during development.<br/><br/>

As the engine evolved, it became a space for implementing and testing a wide range of features across graphics, gameplay support, and tooling. The development log below documents that process, from early rendering foundations to more advanced work such as lighting, skeletal animation, post-processing, collision, multithreaded jobs, and profiling workflows.<br/><br/>

Together, these systems form a lightweight but extensible engine framework for building and testing interactive 3D applications.<br/><br/>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/engines/triangle.png" title="triangle img" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Triangle</b><br/>
       </center>
        - Created a basic rendering pipeline with vertex buffers and shaders<br/>
        - Made helper classes for drawing simple objects<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Cube</b><br/>
        </center>
        - Built mesh rendering with vertex and index buffers<br/>
        - Added object transforms and a camera system<br/>
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
            <b>Texture</b><br/>
        </center>
        - Added a z-buffer so objects could render with correct depth<br/>
        - Added UV coordinates for textured meshes<br/>
        - Passed texture data into the shader<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Lighting</b><br/>
        </center>
        - Added a Material class to store surface properties<br/>
        - Built a point light system for the scene<br/>
        - Created a Phong shader using light, material, and texture data<br/>
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
            <b>Lambert / Rim / Half Lambert Shaders</b><br/>
        </center>
        - Implemented a Lambert shader for diffuse lighting<br/>
        - Modified it into a Half-Lambert shader for softer light falloff<br/>
        - Added a rim light effect to make the silhouette stand out more<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Models</b><br/>
        </center>
        - Built an asset manager to reuse loaded assets<br/>
        - Implemented JSON level loading for scene objects<br/>
        - Added components to scene objects for different behaviors<br/>
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
            <b>Animation</b><br/>
        </center>
        - Implemented Skeleton and BoneTransform classes<br/>
        - Built an Animation class to control bone movement over time<br/>
        - Added a skinned shader for animated models<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Collision</b><br/>
       </center>
        - Implemented a Physics class with AABBs and LineSegments<br/>
        - Built unit tests for AABB-AABB and AABB-LineSegment intersection<br/>
        - Added collision to the player so it could stand on platforms and fall properly<br/>
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
            <b>Jobs</b><br/>
        </center>
        - Added a profiler and timer to track function run time<br/>
        - Saved timing data to txt and json files<br/>
        - Implemented a job manager with multithreaded workers<br/>
        - Used Chrome Tracing to visualize the recorded data<br/>
    </div>
</div>

<hr>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <center>
            <b>Normal Maps</b><br/>
       </center>
        - Added support for normal maps in the rendering pipeline<br/>
        - Extended the input layout to include tangent data<br/>
        - Implemented a normal map shader<br/>
        - Used rotating objects to check that the effect was working correctly<br/>
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
            <b>Post Processing (Bloom)</b><br/>
        </center>
        - Created an off-screen render target to store the scene as a texture<br/>
        - Built a bloom shader to isolate bright areas<br/>
        - Added half- and quarter-resolution buffers for a two-pass Gaussian blur<br/>
        - Blended the bloom result back onto the original scene<br/>
    </div>
</div>

---

<b>What I Worked On</b><br/>
- Designing and implementing real-time rendering systems and shader pipelines (HLSL)<br/>
- Building animation, collision, and scene management systems<br/>
- Developing multithreaded job systems and profiling workflows<br/>
- Debugging graphics and performance issues using Visual Studio and Chrome Tracing<br/>
- Applying linear algebra and vector math to real-time systems<br/>