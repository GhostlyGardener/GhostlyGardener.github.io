---
layout: page
permalink: /music/
title: 音乐
nav: true
nav_order: 3
description:
display_categories: [游戏音乐, 声音设计, 作曲]
horizontal: false
---

<!-- pages/music.md -->
<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_music = site.music | where: "category", category %}
  {% assign sorted_music = categorized_music | sort: "importance" %}
  {% if sorted_music.size > 0 %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_music %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% else %}
  <p>之后再放。</p>
  {% endif %}
{% endfor %}
</div>
