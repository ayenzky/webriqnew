---
title: What is a Static Website
author: Philippe Bodart
banner: /img/uploads/what-is-a-static-website.jpg
shortdesc: "A series of post on the why, how and when of Static Websites"
cmsUserSlug: ""
date: 2016-06-26T16:00:00.000Z
categories: null
---

## **A Little Background**

There’s been a lot of talk recently about [STATIC SITES](http://app.webriq.com/sites/create) and the new generation of tools used to create them,commonly referred to as “**static site generators**” or “**static site engines**.” As with any new technology, it can sometimes be hard to differentiate the hype from the reality. In a series of blog post aims to give you a broad understanding of the technology: what it is and whereit best applies. First, however,we need to define what static sites are and where they came from.

The term “static site” is an interesting one if you think about it, as it defines itself by what it lacks. The “static” aspect doesn’t so much describe a feature as the absence of one: dynamic page rendering. Once upon a time, probably before we commonly used the term “static site,” this would have been considered a weakness.

Those of us who’ve been working in web development for some time probably recall building static sites using tools like Dreamweaver, HomeSite, or(heaven forbid) FrontPage. The content on these pages could only be changed by manually altering the existing site files and replacing the files onthe server via FTP.

There were a number of issues with this process. Adding content to the site required a moderately high level of technical knowledge, either knowledge of the specific tool used to design and build the site or of HTML to hand code the site. One also needed to understand how to deploy the site to a host via FTP, which isn’t necessarily straightforward for non technical users. This meant that the content creators, who are frequently non technical, could not directly or easily contribute to the site and required the assistance of a webdeveloper to add new content.

Creating new pages typically required copying and tweaking existing pages. As the site grew, maintaining proper navigation and links typically became both tedious and extremely error prone. Some tools offered features like templates that tried to solve these issues, but these could be complicated or cumbersome to create.

In addition to these issues, there was the limitation that if your site required dynamic features like comments or forums, for example, this was simply not possible in a pure static site.

## The Dynamic Site Era

Dynamic sites seemed to fix these issues. Non technical content creators could create and update pages via backend forms without the need to understand the specifics of website development tools or HTML. Since the content and pages were all driven from a database, navigation could be generated automatically. In addition, by definition, dynamic sites allow for dynamic features such as forums or comments.

In the case of content-focused web pages, dynamic sites often took the form of a content management system (CMS). These could be custom built to the needs of the site or, very frequently, selected from a number of commercial or open source options.

To this day, most of the content published on the Web runs through some form of content management system. Popular open source options include [Drupal,](http://drupal.com/) [Joomla,](http://www.joomla.org/)and [Typo3](http://typo3.org/) or [WebriQ CMS](http://www.webtools2go.com/). Nowadays, these systems typically handle much more than simply content creation and publication, with features such as complex roles and access control, workflow management, document management, and syndication.

These additional features lead to the biggest issue with dynamic sites, which is that the solution is often more complex than the problem. By virtue of its need to cater to a broad set of customers, a pre-built CMS often has a steep learning curve for both developers and content creators. Meanwhile, a custom CMS requires both extensive development efforts and access to a developer should issues or necessary changes arise.

Hosting dynamic sites is complicated by the need for database storage (and backups) as well as support for whatever dynamic language the site is built upon (PHP,Ruby, etc.). Factor in the need for regular updates to the dynamic language, database solution and even the CMS software itself, and it becomes rather obvious that, while dynamic sites solve many difficult problems, they bring with them their own set of complications.

## The Rise of Blog Engines

The complexity of content management systems was not well suited for smaller, content-focused sites or blogs that didn’t require advanced features like complex user roles or workflow. Blogging engines, the most popular being [Wordpress](https://wordpress.org), aimed to solve this by making development simple, with pre-built and easily customizable templates, and publishing content quick and easy.

Blog engines don’t negate the need for supporting a dynamic language(PHPin the case of WordPress) or for a database(typically MySQL for WordPress). WordPress, however, became popular enough that many hosts made “out-of-the-box” hosting solutions that simplified set up and maintenance. To give you a sense of the popularity of WordPress, [according to W3Techs,](http://w3techs.com/technologies/overview/content_management/all/) as of May 2015, Wordpress is used on approximately 23.9% of the top 10 million sites, a percentage that dwarfs every other content management system.

Nonetheless, overtime, WordPress has begun to gain some of the complexity of a typical CMS, and it is generally lumped in the category of CMS by most industry research. Many sites heavily depend on features that are added via plug-ins, the [quantity and quality of](http://wpengine.com/2013/08/28/plugins-and-fast-wordpress-sites-its-not-the-number-of-plugins-its-the-quality/) which can dramatically impact site performance.(http://wpengine.com/2013/08/28/plugins-and-fast-wordpress-sites-its-not-the-number-of-plugins-its-the-quality/. In addition, features like plug-ins and [“shortcodes”can](https://codex.wordpress.org/Shortcode) impact the portability of content, keeping your site tied to the Wordpress platform.

Some in the blogging community felt that Wordpress and competing blog engines like [MoveableTypehad](https://movabletype.org/) strayed so far from the simplicity of their initial blogging focus that they created new projects, like [Ghost](https://ghost.org/) , that aimed to get back to the basics of just blogging. Ghost’s tagline is, in fact, “Justa blogging platform.”

## Static Pages Get A New Life

Whatever complexity dynamic sites may bring, for most use cases, there is simply no avoiding the need for dynamic data. Even the most basic content site, like a personal blog, generally has dynamic aspects: commenting, feedback or contact forms and search, to name just a few. So it wasn’t until the rise of new services that can fill these voids that static sites really became a viable option of rmore than just [“brochureware”.](http://www.oxforddictionaries.com/us/definition/american_english/brochureware)

There are numerous services, both free and paid, that offer the ability to add dynamic aspects into static pages (it’simportant to note that these services are not specifically intended for use only on static sites). Some popular options include:

 • [Disqus,](https://disqus.com/) [Livefyre,](http://web.livefyre.com/comments/) or [Facebook for](https://developers.facebook.com/docs/plugins/comments) comments

• [Wufooor](http://www.wufoo.com/) or [Google for](http://www.google.com/forms/about/) forms

• [Google,](https://cse.google.com/cse/) [Swiftype,](https://swiftype.com/) or [AddSearch for](http://www.addsearch.com/) search

• [Discourse for](http://www.discourse.org/) forums

There are many more covering a full range of typical site requirements. There even BaaS(backend as a service) solutions like [Parseor](https://parse.com/), [Kinveyth](http://www.kinvey.com/) that offer APIs that allow developers to pull any form of arbitrary dynamic data into a static page.

If you’re interested in some of the services listed above as well as implementations, read an article on the topic called [“Movingto](http://modernweb.com/2013/12/16/moving-to-static-and-keeping-your-toys/)[Staticand Keeping YourToys”.](http://modernweb.com/2013/12/16/moving-to-static-and-keeping-your-toys/)

## Defining a Static Website

So far we’ve covered some background showing how the static web pages of old failed to meet the needs of the Web as websites became more complex and interactive. We discussed how dynamic sites generally and content management systems specifically solved some of these problems but led to increased complexity in both development and authoring. Blog engines partially addressed these issues but also took on some of the complexity over time. Finally, we saw how the rise of services have helped make static pages a viable option again.

### Given all the above, what is a Static Website exactly 

This is probably the key defining characteristic of a static site and part of why static sites tend to perform so well: there is no server-side generation at runtime. This means, for instance, that every visitor to your static site will be served an identical copy of _index.html_ from the server until it is manually overwritten, say by uploading a new file or by committing to a Github repository. 

 _There is no server-side language._

It follows from the preceding characteristic that there would be no server-side language (like Ruby or PHP for example) involved.

 _Thereis no database._

As there is no server-side language to speak to a database, there is therefore no database. This does not mean that there is no data. There can be data stored as files or via an external service like the ones discussed earlier. This means that if you need common features like user registration/login, this would need to be via an external service.

 _Static sites are HTML,_ _CSS, and JavaScript._

This seems fairly obvious, but it should be clear that since static sites are intended to run in the browser, they must rely on web technologies to function. Of course, this can also include images like JPEG and GIF, graphic files like SVG and WebGL, or data formats like JSON or XML.

## Benefits of Static Sites

While each of the preceding features brings with it certain limitations, they also lead to some of the primary benefits of static sites:

 _Performance_

There is no server-side processing and no database to connect to, meaning that there is nothing to slow down getting a static page from the server to your end user. This also means that there are no bottlenecks that might cause slowness or outages should you encounter a significant traffic surge.

 _Hosting_

Since no server-side language is required, hosting requires no complicated setup or maintenance, making it cheap and easy. In fact, there are even free options, like [GitHub pages or](https://pages.github.com/) [Surge,](https://surge.sh/) for instance. Hosting and deployment will be covered in follow onposts. 

 _Security_

There are no server-side language issues to exploit and no database to hack. Basically, as long as the files on your host are secure, your static site is secure.

_Content versioning_

Since your entire site, from configuration to content, is file-based, it is very easy to keep all aspects of it within a version control system like Git. This can be especially advantageous for things like documentation that you may want to allow community contributions, forexample, using pull requests on GitHub.

**To be continued in later posts.**

Get a sneak preview on [WebriQ's Web Content Management System for Static websites](http://app.webriq.com/sites/create) or just go through a [QUICK DEMO](http://app.webriq.com/help/page/demo/howto)

**This post is an extract from the Book by Brian Rinaldi – Static Site **Generators.**** 