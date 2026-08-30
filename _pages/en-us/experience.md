---
layout: page
title: Experience
permalink: /experience/
description: Professional game development experience.
nav: true
nav_order: 3
display_categories: [Internship]
---

<div class="projects">
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_experience = site.experience | where: "category", category %}
    {% assign sorted_experience = categorized_experience | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-2">
      {% for experience in sorted_experience %}
        {% assign project = experience %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
