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
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;
&lt;/title&gt;
&lt;style&gt;
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1 class=&quot;site-title&quot;&gt;&lt;/h1&gt;
&lt;div class=&quot;menu&quot;&gt;&lt;/div&gt;
&lt;h2 class=&quot;title&quot;&gt;&lt;/h2&gt;
&lt;p class=&quot;date&quot;&gt;&lt;/p&gt;
&lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
&lt;script src=&quot;gibbon.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`
