# Gibbon CMS
A serverless CMS that runs on Github Pages

## Features
- Easy to edit pages
- Easy native HTML/CSS theme creation
- Built in Markdown
- Versionn Control through Git
- Free Hosting on Github Pages
- Completely free and Open Source

## Motivation
Github Pages offers free static site hosting and even allows domain mapping, so it is an ideal candidate to base a free static CMS on. Many people don't need server-side code for their sites, and could greatly reduce server costs, especially for open source projects.

Another strong motivator was to create a bare-bones lightweight CMS that has themes that are very similar to native HTML/CSS. I also wanted page editing to be simple and utilize markdown.

## Installation

`git clone https://github.com/zakerytclarke/gibboncms.git`


## Url Scheme

Becuase Gibbon CMS is completely serverless and has many restrictions created by Github Pages, Gibbon has a different page addressing scheme. To visit a page, use the following URL format:

`https://yoursite.com?page`

Additionally, if your try to access a page that doesn't exist, Gibbon will automatically provide a 404 error.

## Edit a Page
Pages are any .md files located in the /pages directory of your repository. The default page is index.md.

1. Create a page called `pagename.md`,
2. Add markdown into it
3. Commit Changes
4. Visit `https://yoursite.com?pagename` to view the result.


## Rendering
Gibbon CMS uses client side rendering in order to render your content. Once your index.html theme loads, Gibbon will download the requested page and insert the markdown content. This allows many pages of content to all be rendered from one URL.

## Theme Development

Almost any HTML/CSS theme can be converted into a Gibbon Theme easily. They simply need to follow the format outlined in the [https://zakerytclarke.github.io/gibboncms/index.html](https://zakerytclarke.github.io/gibboncms/index.html)

```
<html>
<html>
<head>
<title>
Gibbon CMS
</title>
<link rel="stylesheet" href="https://zclarke.xyz/evenbettermotherfuckingwebsite/style.css">
</head>
<body>
<h1>
Gibbon CMS
</h1>
<div class="content"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.js"></script>
<script src="gibbon.js"></script>
</body>
</html>

```

The reserved CSS Classes are as follows:

`content`        The location to insert the page's content

You can have as many elements with these respective classes as you desire, and the respective content will be inserted into all of them upon page render.

To implement your own theme, simply edit the index.html file of the repository



## Credits

Created by Zakery Clarke

Questions, Comments, Concerns?

Create an issue [here](https://github.com/zakerytclarke/gibboncms/issues)
