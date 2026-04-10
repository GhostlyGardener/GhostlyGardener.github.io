---
layout: about
title: About
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

Hi! I'm a student game developer and composer interested in the technical and creative side of interactive media.

I enjoy working on gameplay programming and the systems that shape how a game feels to play.

I'm currently attending USC Viterbi School of Engineering, studying computer science with an emphasis on game development.

I enjoy a wide range of games, especially ones with strong atmosphere, satisfying mechanics, or memorable artistic identity. Some of my favorites include Dark Souls, Stellaris, and Touhou Fūjinroku ~ Mountain of Faith.

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "/assets/img/bonfire.jpeg",
      "/assets/img/demonSouls.jpg",
      "/assets/img/Irithyll.jpg",
      "/assets/img/Knight.jpg"
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const img = document.getElementById("profile-image");

    if (!img) return;

    const picture = img.closest("picture");
    if (picture) {
      picture.querySelectorAll("source").forEach(source => source.remove());
    }

    img.src = randomImage;
    img.alt = randomImage.split("/").pop();
  });
</script>