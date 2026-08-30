---
layout: about
title: 关于
permalink: /
subtitle: thyoumu8848@gmail.com

profile:
  align: right
  image: bonfire.jpeg
  image_circular: false # crops the image to make it circular
  more_info: 

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

你好！我在南加州大学学习计算机科学（游戏方向），平时做游戏开发和音乐创作。

平时接触和游玩过许多不同类型的游戏，尤其喜爱沉浸感强、机制出色，或者艺术风格鲜明的游戏。一些喜欢的作品有《黑暗之魂》《蔚蓝》《只狼：影逝二度》《极乐迪斯科》《我的世界》《群星》《东方风神录》。

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "/assets/img/bonfire.jpeg",
      "/assets/img/demonSouls.jpg",
      "/assets/img/Irithyll.jpg",
      "/assets/img/Knight.jpg"
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const img =
      document.getElementById("profile-image") ||
      document.querySelector(".profile img");

    if (!img) return;

    const picture = img.closest("picture");
    if (picture) {
      picture.querySelectorAll("source").forEach(source => source.remove());
    }

    img.src = randomImage;
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.alt = randomImage.split("/").pop();
  });
</script>
