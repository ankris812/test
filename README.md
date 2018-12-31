# Gibbon CMS
A serverless CMS that runs on Github Pages

## Features
- Blog Hosting
- Easy to edit pages
- Free Hosting on Github Pages
- Completely free and Open Source

## Motivation
Github Pages offers free static site hosting and even allows domain mapping, so it is an ideal candidate to base a free static CMS on. Many people don't need server-side code for their sites, and could greatly reduce server costs, especially for open source projects.

Another strong motivator was to create a very bare-bones CMS that has themes that are very similar to native HTML/CSS.

## Installation

Visit [https://zakerytclarke.github.io/gibboncms/?install](https://zakerytclarke.github.io/gibboncms/?install)

## Change Theme
To change your sites theme, upload your source files and an index.html file into the root of your repository.

## Editing Content

## Theme Development

Almost any HTML/CSS theme can be converted into a Gibbon Theme easily. They simply need to follow the format outlined in the [https://zakerytclarke.github.io/gibboncms/themes/bare/bare.html](https://zakerytclarke.github.io/gibboncms/themes/bare/bare.html)
`
<html>
<head>
<title>
</title>
<style>
</style>
</head>
<body>
<h1 class="site-title"></h1>
<div class="menu"></div>
<h2 class="title"></h2>
<p class="date"></p>
<div class="content"></div>
<script src="gibbon.js"></script>
</body>
</html>
`
