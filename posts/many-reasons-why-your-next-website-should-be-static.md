---
title: Many reasons why your next website should be Static
author: Philippe Bodart
banner: /img/uploads/many-reasons-static.jpg
shortdesc: There are many reasons why moving away from Wordpress to a Static website approach makes sense
cmsUserSlug: ""
date: 2016-06-16T16:00:00.000Z
categories: null
---

## Your website is overkill, and it’s killing your traffic.

There’s no reason to have a massive, unwieldy Content Management System with a database when you could have a fast, secure and beautiful static site. But how can you decide if a static site is right for you?

###  1. YOU VALUE SECURITY

When was the last time you updated your CMS software and plugins? By conservative estimate, [70% of all WordPress installs](https://www.wpwhitesecurity.com/wordpress-security-news-updates/statistics-70-percent-wordpress-installations-vulnerable/) are vulnerable to known security exploits. In 2014, [millions of Drupal sites](https://blog.sucuri.net/2014/10/drupal-warns-every-drupal-7-website-was-compromised-unless-patched.html) were vulnerable due to a bug in the code, and [Drupal told users](https://www.drupal.org/PSA-2014-003) that if they hadn’t updated within 7 hours of the announcement, they should assume that they were hacked. 

With a static site, you don’t have to worry about malicious code being injected into your site when users visit it. Static sites are builton a production machine by static site generators, which take yourcode and spit out flat HTML files with CSS and JavaScript. When a user requests a page from your site, the server just sends them the file for that page, instead of building that page from various assets each time a viewer comes on . No build process means standard hacking attacks like scripting or database security exploits just don’t work.

###  2. YOU VALUE SPEED

What does a browser do? It renders HTML, CSS and JavaScript into a human-viewable format. No matter what type of site you use, a legacy dynamic site or a modern static one, what gets sent from the server to your browser is HTML, CSS and JavaScript. So why take the time and resources to render your site every single time someone visits when you can have a pre-built version ready to go? There’s a reason that a normal static site hosted on a CDN is often 10 times faster time-to-first-byte than a site built with a legacy Content Management System.

Additionally, by hosting your static site on a CDN, you can serve it from whichever node is closest to your users. Someone viewing your site in a coffeeshop in Vienna pulls from a European server, not a server farm in Silicon Valley. The same goes for your Japanese visitors, or a user just down the street.

###  3. FLEXIBILITY

Your basic site built with WordPress or Drupal starts out as a one-size-fits-all solution that is then customized by bolting on plugins. A lot of plugins. Seriously, so many plugins. A quick Googlesearch for “must have WordPress plugins” yields a front page where nine of the ten posts list 20 plugins or more as “must have”.

Witha static site, you can get lean and mean, with a tool that does exactly what you need it to. Make like the pros and use [Middleman](http://www.middlemanapp.com/) or [Roots](http://www.roots.cx/). At WebriQ we love to work with Roots as it build with a corporate client in mind.

###  4. SMALLER FOOTPRINT

Your WordPress install is a monster of cobbled together software and hardware, and probably looks something like this:
a machine running your preferred distro of Linux
a web server running Nginx or Apache
PHP with its associated extensions and web server configurations
MySQL
WordPress or similar exercises like Joomla, Drupal, Concrete5 etc.
All the plugins you need 
Your theme and template code
If you don’t want to host your own, then you just have to hope that your host keeps its PHP and MySQL up to date, so that you aren’t exposed to those pesky security vulnerabilities that crop up everynow and again. Then there is the upkeep. Make sure you’ve allotted time to manage all these dependencies. And some more time in case an updated plugin or theme breaks something.

A static site, when generated, is capable of being hosted on any webserver that can return HTML files. Of course, you’ll want to take advantage of the possibilities afforded to you with a static site by finding a host that allows for things like continuous deployment,instant cache invalidation, automated deploys and more. That job is done for you here at WebriQ without the need of having admin staff on board.

###  5. RELIABILITY

The beauty of serving up flat HTML files is that they can be hosted anywhere and everywhere, like on a CDN. Let’s say there’s a DDoS attack on the server where your legacy site is hosted. Sorry, but you might just be down for a few hours or even days. That same attackhits a node where your static site is hosted? Your site just gets served up from the next node. Your visitors never notice that there’s a problem.

###  6. VERSION CONTROL

It’s completely possible to design a site on your production machine and then upload it to a host , but the majority of developers would like some sort of version control system like Git. You can be roll back toearlier commits, meaning that short of deleting your online repository, you can always go back to a previous version of your site with a few keystrokes. And if you are a WebriQ customer, you can rollback to a previous deploy with just one click.

###  7. DEVELOPER EXPERIENCE

The beauty of using a static website generator is in the developer experience. Build tools will output your HTML to a particular directory on your build machine, and nearly all tools include a local web server, which allows you to check and double check your progress as you go. You have the security of knowing that your site will look exactly the same to your visitors as it does to you as a developer.

###  8. SCALABILITY

You’ve hit it big! Your site has gone viral, and you are seeing absolutely massive response and increased visits thanks to getting name checked across the social media spectrum. Did you anticipate that this might happen? Did you over provision massively, just in case this happened? Are you paying for huge chunks of bandwidth monthly, hoping for an explosion of traffic.

Or are you making frantic calls to your service provider to get back up online after you made it to Reddit’s front page? Your plan couldn’t handle that kind of attention, and now you are down.

And when your traffic means that you have to scale, it means that you are paying for all that complex code to run on your server at every page request. And that’s going to hit you right where it hurts the most.

With static, scalability is barely an issue. Of course it scales! Increased requests mean increased pages served, but no extra work in building those pages. With some providers, scale is built in, whilewith others like Amazon’s S3, all you have to pay for is the increased bandwidth.

###  9. HOSTING &amp; PRICE

I fall the heavy lifting of building a static site is done on your production machine, then what exactly is it that you are paying for with hosting? Asset storage, basically. Your static HTML files take up next to no space, and so your service is usually priced accordingly. Instead, you can spend your money where it really matters, on the features that make your site faster and your life easier, features like atomic deploys and asset fingerprinting to make sure your site is always globally consistent, or git integration andautomated builds, so your site is always up to date with your latest changes, and snapshot versioning and instant rollbacks.

There’s never been a better time to take advantage of the speed, security and reliability of static web generators and the development environment around them. So what are you waiting for?

Signup for a FREE account on [SIGNUP](http://app.webriq.com/sites/create)

 