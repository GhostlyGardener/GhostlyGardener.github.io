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

你好！我是一名热爱游戏开发的学生，也有在做音乐创作。对互动媒体中的游戏体验，以及技术与创意在其中的共同作用很感兴趣。

我喜欢把团队中的想法落实为具体的机制、交互和系统，也很关注它们最终如何塑造整体的游玩体验。

目前就读于南加州大学维特比工程学院，主修计算机科学，方向为游戏开发。

平时接触和游玩过许多不同类型的游戏，尤其喜爱沉浸感强、机制出色，或者艺术风格鲜明的游戏。一些喜欢的作品有《黑暗之魂》《群星》《东方风神录》。

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
      document.querySelector(".profile img") ||
      document.querySelector("img[alt='profile image']") ||
      document.querySelector(".post img");

    if (img) {
      img.src = randomImage;
    } else {
      console.log("没有找到头像图片元素");
    }
  });
</script>