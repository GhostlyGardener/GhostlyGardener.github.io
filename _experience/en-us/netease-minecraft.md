---
layout: page
title: "NetEase Games, Minecraft: China Edition"
description: "Client engineering for an in-game AI companion, spanning tool use, knowledge retrieval, streaming command UI, and production fixes."
img: assets/img/experiences/minecraft_copper_update.png
importance: 1
category: Internship
---

This internship centered on turning an LLM-driven assistant into a practical in-game feature. I worked across the agent workflow and the client experience, connecting model decisions to game actions and presenting those actions through an interface that remained readable while responses streamed in.

## Agent workflow

The assistant combined general game commands with scenario-specific Minecraft ModSDK tools. A player request could become a sequence of actions such as inspecting status or inventory, obtaining an item, summoning an entity, or teleporting. Server results were returned to the model so it could continue dependent steps instead of treating every command as an isolated action.

I also connected a Wiki-backed retrieval layer to the workflow. It supplied relevant game knowledge and command details when the model needed additional context for tool selection and planning.

## Client command interface

I implemented the command UI in Python and Cocos Studio from Figma designs, covering single commands, batches, and chained actions. The interface was integrated into the existing streaming conversation flow rather than presented as a separate tool screen.

The main rendering challenge was keeping incremental updates stable. I grouped related command cards and their batch controls into one render unit, then managed reuse, visibility, and layout within that unit so later chat content would not shift as new command state arrived.

## Production debugging

Alongside the feature work, I investigated live client issues involving touch handling in reward popups and inconsistent UI presentation. Fixes were verified through in-game regression testing before completion.
