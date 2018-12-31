# Gibbon CMS
A serverless CMS that runs on Github Pages

## Features
- Blog Hosting
- Easy to edit pages
- Easy native HTML/CSS theme creation
- Free Hosting on Github Pages
- Completely free and Open Source

## Motivation
Github Pages offers free static site hosting and even allows domain mapping, so it is an ideal candidate to base a free static CMS on. Many people don't need server-side code for their sites, and could greatly reduce server costs, especially for open source projects.

Another strong motivator was to create a bare-bones lightweight CMS that has themes that are very similar to native HTML/CSS. I also wanted blogging and content creation/editing to be as easy as possible.

## Installation

Visit [https://zakerytclarke.github.io/gibboncms/?install](https://zakerytclarke.github.io/gibboncms/?install)

1. Create a Repository to store your website in
2. Create a Personal Access Token
3. Enter this information at the above URL

## Url Scheme

Becuase Gibbon CMS is completely serverless and has many restrictions created by Github Pages, Gibbon has a different page addressing scheme. To visit a page, use the following URL format:
`https://yoursite.com?page`

### Reserved URLS

`https://yoursite.com?admin`     Admin Panel
`https://yoursite.com?error`     Error Page

Additionally, if your try to access a page that doesn't exist, Gibbon will automatically provide a 404 error.


## Rendering
Gibbon CMS uses client side rendering in order to render your content. Once your index.html theme loads, Gibbon will download the requested page and insert the content. This allows many pages of content to all be rendered from one URL.

### Customization

## Change Theme
To change your sites theme, upload your source files and an index.html file into the root of your repository.

## Editing Content
Goto [https://yoursite.com/?admin](https://yoursite.com/?admin) to edit your pages and content

## Theme Development

Almost any HTML/CSS theme can be converted into a Gibbon Theme easily. They simply need to follow the format outlined in the [https://zakerytclarke.github.io/gibboncms/themes/bare/index.html](https://zakerytclarke.github.io/gibboncms/themes/bare/index.html)

```
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
```

The reserved CSS Classes are as follows:

`site-title`     The location to insert the site title
`menu`           The location to insert the site menu 
`title`          The location to insert the page's title
`date`           The location to insert the date the page was last edited
`content`        The location to insert the page's content

You can have as many elements with these respective classes as you desire, and the respective content will be inserted into all of them upon page render.
