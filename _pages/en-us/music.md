---
layout: page
permalink: /music/
title: Music
nav: true
nav_order: 4
description:
display_categories: [Game Music, AI-Assisted Experiments, Sound Design, "Sketches & Studies"]
horizontal: false
---

<!-- pages/music.md -->
<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_music = site.music | where: "category", category %}
  {% assign visible_music = categorized_music | where_exp: "item", "item.hidden != true" %}
  {% assign sorted_music = visible_music | sort: "importance" %}
  {% if sorted_music.size > 0 %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_music %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% else %}
  <p>More later.</p>
  {% endif %}
{% endfor %}
</div>
