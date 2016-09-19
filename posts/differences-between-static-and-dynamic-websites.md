---
title: Differences between Static and Dynamic Websites
author: Philippe Bodart
banner: /img/uploads/1458052308static.jpg
shortdesc: "A summary of the main differences between Dynamic websites, build with tools like Wordpress and Static websites build with tools like WebriQ CMS"
cmsUserSlug: ""
date: 2016-09-18T16:00:00.000Z
categories: ""
---

##  **What is a Static Site Website?**

A Static Site Generator is a compromise between using a hand-coded static site and a full CMS, while retaining the benefits of both. In essence, you generate a static HTML-only website using CMS-likeconcepts such as templates. The content can be extracted from a database but, more typically, Markdown files are used. These files are also the basis of the CMS system, enabling you to update any content on the fly.

The site generation can occur on your development machine or staging server. The resulting HTML files are then deployed to a live webserver. Users will never know the difference.

A related concept is a _“Headless”_or _“Decoupled”_CMS. These use an interface such as WordPress to handle content administration but allow other systems to access the data via a [RESTAPI](https://en.wikipedia.org/wiki/Representational_state_transfer). One of the better implementations based on the Github Rest API, is [WEBRIQ CMS](http://demo.webriq.com/). 

Popular static site generators include [Roots](http://www.roots.cx/) (used for WebriQ CMS) , [Jekyll](http://jekyllrb.com/), [Hugo](http://gohugo.io/) and [Metalsmith](http://www.metalsmith.io/).

## Major BENEFITS of STATIC WEBSITES

###  **1. Flexibility**

CMSs normally constrain your options, because they’re tied to a database with specific fields. If you want to add a Twitter widget to some pages, you’ll normally require a plugin, a short code or some custom functionality.

In a static site, the widget can simply be inserted into a file directly or using a partial/snippet. There are very few limits, because you’re unshackled by the those imposed by a CMS.

###  **2. Better Performance**

Most CMS applications offer built-in or plugin-powered cache systems to ensure pages are generated and reused when possible. This is effective, although the overhead of managing, validating and re-generating cached pages remains.

Static sites are pre-cached pages which never expire. Files can also be minified prior to deployment to guarantee the smallest load. A static site will always perform better than a CMS-powered version using a similar template.

###    **3. Fewer Server-side Dependencies**

A typical WordPress installation requires:

 - a suitable operating system such as Ubuntu or CentOS

 - a web server such as Apache or NGINX

 - PHP with associated extensions and web server configurations

 - MySQLor PostgreSQL

 - WordPress application

 - any necessary plugins

 - the theme/template code.

These dependencies must be installed and managed. WordPress requires less effort than some other applications, but it’s still possible for a single update to any part to cause chaos.

A static site is lightweight, and can be hosted by any web server able to return HTML files. There is nothing else to install, manage or update.

###  **4. Improved reliability**

 A CMS is complex, with many moving parts and points of failure. Run a WordPress site for any length of time and you’ll almost certainly encounter the dreaded _“Failedto establish a database connection”_error. Unforeseen CMS problems can arise from sudden traffic surges, which crash the database or restrict active connections.

Serving a static site is less intensive — the server just has to return flat files. It’s still possible to crash a web server, but it’ll take considerably more concurrent requests.

###  **5. Superior Security**

There are several reasons why someone may want to attack your website. Traffic hijacking, rogue advertising, linking, authenticity spoofing and malware hosting all permit an unauthorized user to make monetaryand/or kudos gains.

A CMS opens a number of attack vectors. The most obvious is the login screen: it’s only as secure as the weakest user password. Be aware that any page running server-side code also offers potential exploits — for example, firing spam emails via your contact form. It may not be obvious that someone has gained access; the worst culprits want to stay hidden.

A static site has little or no server-side functionality. You cannot access it via scripting or database security holes. Someone could still gain access via SSH or FTP, but they would struggle to do much damage other than defacing pages or uploading files. 

###  **6. Client Control Considerations**

You spend weeks building attractive CMS themes for the client to trash their site within minutes of your hand-over. Using a CMS is not necessarily easy, and it offers considerable power to content editors. You can lock down rights such as plugin installation, but it won’t prevent someone changing fonts, adding weird colors, using poor photographyor corrupting the layout.

A static site can use Markdown files. That limits the user’s options; they make fewer mistakes and cannot adversely affect the pages. 

###  **7. Version Control and Testing**

Database data is volatile. A CMS permits users to add, delete or change content on a whim. Wiping the whole site is a few clicks away. You can back up databases but, even if that’s done regularly, you’re still likely to lose some data.

A static site is safe presuming your content is defined in Markdown files and you use a version control system such as [Git](https://git-scm.com/). Old files are retained, and changes can be undone quickly. Testing becomes easier because the site can be generated and previewed anywhere. 
Preview files are on a separate Git repository, as the live files which are on themain branch. 

So all is good in the static site world. 

For developers interested in our Boilerplate or Certification process.

[BOILERPLATE](https://boilerplate.webriq.com/)

[GETCERTIFIED.](http://webriq.com/get-certified)

