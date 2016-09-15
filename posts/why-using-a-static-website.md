---
title: Why using a Static Website
author: Philippe Bodart
banner: /img/uploads/why-using-a-static-website.jpg
shortdesc: "A look at an APP that enables you to build, manage and update Static websites, much in the same way as you would set-up your Wordpress site"
cmsUserSlug: ""
date: 2016-04-11T16:00:00.000Z
categories: null
---

Web development has stagnated on a concept in recent years, the idea of a requisite dynamic content management system (such as WordPress or Drupal), but now there is a [resurgence in static websites](http://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/). For some time we have recognized the value of using static websites and wanted to provide some insight into the practical choices made when evaluating the suitability of the static website approach.

 When discussing static websites, most people respond "Why? Why should I make this website static?", but instead the question should be *Why should my website be Dynamic or driven by a database?*

 STATIC OR DYNAMIC WEBSITE

The term _static site_ describes a website with pre-existing content and available as plain HTML files. This is in contrast to a _dynamic site_ in which content is generated upon request by a series of backend systems, essentially a database.

 All sites have some static content: the images, [the styling](https://en.wikipedia.org/wiki/Style_sheet_(web_development)), etc... For dynamic sites the HTML markup that brings all of it together is not already available for use, rather it is generated at the time it is needed by a browser. In contrast, a static website has this markup pre-generated and immediately ready to be sent to a browser without delay, having already performed the generation step before the site was made available. 

 Not taking the performance hit of generating the site content upon request spares the burden of [real-time infrastructure](http://c179631.r31.cf0.rackcdn.com/diagram_scalablewordpress.png), which translates directly to sites exhibiting greater speed and stability [at significantly lower costs](https://aws.amazon.com/s3/pricing/). The absence of this complex infrastructure results in sites that are more secure and scalable. Cloud hosting has made it such that for almost negligible cost a static website will never be unavailable and can scale to meet any perceivable demand. Static site generation was [one of the techniques](https://developmentseed.org/blog/2013/10/24/its-called-jekyll/)used to save the [healthcare.gov website](https://www.healthcare.gov/) when it had trouble scaling in it's initial rollout.

 WHEN TO USE A STATIC WEBSITE

As the [LAMP stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) , i.e Wordpress and it's lookalikes grew in popularity, its use in creating websites became common and many sites that did not have particular needs to be dynamic were created **dynamic by default**. This is not the best approach.

 Imagine you have a website that presents widget information, and you have 1000 widgets in your database. It would be easy to default to creating a dynamic website with a script taking the widget name as input and displaying specific information about that widget when the site was hit. An alternative is to use a static website generator to create the 1000 different pages (one for each widget) and use those to show the widget information. If the widgets ever update, the site may be re-generated to update the content. Now that static website generators have the capability to effortlessly rebuild websites around new content, adding new content to static websites may be configured to as a turnkey operation.

 It may require creative thought as to how to turn a website that would be obviously dynamic into a static website. At the same time, never before has there been this many quality tools for adding dynamic _elements_ to otherwise static websites. Now that [the Google Crawler is executing JavaScript](http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157) as part of content indexing, the traditional major penalty of this approach has been removed.

 See the aforementioned article for greater [details on the process of static website generation](http://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

 Generally you should be striving to make your website as static and compressed as possible, while recognizing there are some good reasons it may not be possible:

INFORMATION UPDATE FREQUENCY

The information you are trying to convey on your website may require real-time generation to display. If you _must_ display content information accurate to the moment the request for the information was made, it would not be possible to pre-generate the content as you would not know what the information actually is at the time of site generation.

 This is not to say that generation cannot be frequent if the data changes frequently. If you have a data set such that generating (and deploying) the site takes 60 seconds, and the data changes every 10 minutes. You still have the opportunity to automate site generation every 10 minutes and have a static website that is relatively current to the information it is conveying.

 If real-time data is of absolute importance, then something like a microservice utilizing client side JavaScript to retrieve the most current information may be used in conjunction with a static website. Possible with some technical creativity.

PERSONALIZATION

If the page you display is completely customized to your user it would not be possible to pre-generate the pages as you would need authentication and then customization information that is only available at the time of the request. Again, this may be mitigated by using client-side JavaScript to provide some of the personalizing.

EASE-OF-USE

It makes sense to use a WordPress blog or other service if you simply do not have the expertise to use the generating tools. In these cases the value is not provided by the dynamic generation of the website, but the interfaces give by the CMS tools to customize the site, requiring that the site be able to feed from a dynamic infrastructure stack.

 MAKING THE DECISION TO GO STATIC

EXAMPLE: THE WORDPRESS SITE

WordPress has become a often requested platform for websites. It is requested due to positive word-of-mouth and adoption rates, but rarely is it analyzed beforehand as the proper approach for a site's needs.

 The site requirements were a completely custom design, lots of static text, some data (not altering for the forseeable future), more of a classic corporate home-page, in [single-page website](https://en.wikipedia.org/wiki/Single-page_application) format.

 While it is possible to build this site on WordPress, it did not make a lot of sense. We instead suggested a static site, and built it with a tool chain readily available in the [WEBRIQ APP](http://app.webriq.com/auth/register/). The site uses client-side JavaScript UI to retrieve and display own and third-party data, adding a more dynamic feel. The end result was a site that fulfilled the requirements, is editable by anyone who knows Text editing, is lightning fast to deliver and is hosted on a Content Delivery Network, with a 100% uptime.

 EXAMPLE: THE CONTENT AGGREGATOR

This looked, initially, like a standard dynamically generated website. The site was a content aggregator, displaying news from a few third party websites, with some extra value-add information.

 After analyzing the requirements, we saw opportunities in the nature of the aggregated data

* We only needed to display the top 50 or so items from each site.
* The sites did not exhibit much data churn within the span of an hour.
 What we saw here was that the overall site itself was static, the data was the only changing portion and that only needed to change on an hourly basis. After some quick prototyping, we found a good static approach. The website itself is statically generated, and the data is generated hourly into a [JSON](https://en.wikipedia.org/wiki/JSON) file which generates a webhook to automatically create a new build for the site. JavaScript is used on the client to display the content in the JSON file and add customization via meta data added as part of the aggregation process. 

###  **TOOLS**

Some of the tools we use in creating static sites:

ROOTS 

Roots is a static site compiler, that generates static html, css, and javascript files. It's very good at helping to build static front-ends. It is sponsored heavily by [**Carrot Creative**](http://carrot.is/), and makes frequent, highly variable builds quicker and easier for freelancers and agencies. It's a truly excellent framework for quickly and easily building small to medium sized front-ends of any kind.

Roots can handle a huge number of compiled languages, and can be used with many tools that help push static sites as far as possible. For example, it can link with an API, pull in your data, and render parts of it into your views on compile. Then it can render the same or other views as javascript templates and you can push any other data from your API into them on the fly at runtime on the client side in reaction to user actions. 


GITHUB

Used to host all your HTML, CSS, Javascript and other assets for continuous deployment of your site. Each time your site has been updated with a new page, new content or new style a webhook will automatically start a new deployment process. The update process typically takes around 10 to 20 seconds, and you will be notified when the new build is ready. The repository approach has two other major benefits - you can revert to previous builds if needed and you can invite a series of collaborators to the repository for updating style sheets, pages and/or content. 

STATIC CMS SYSTEM

A JavaScript based CMS for static site generators. It gives non-technical users a simple way to edit and add content to any site built with a static site generator, in this case Roots. 
The CMS is a single-page app that you pull into the /admin part of your site.

It presents a clean UI for editing content stored in a Git repository. As an example [WebriQ Blog Admin](http://blog.webriq.com/admin) 

You setup a config to describe the content model of your site, and typically tweak the main layout of the CMS a bit to fit your own site.

When a user navigates to /admin she'll be prompted to login with a Github credential, and once authenticated she'll be able to create new content or edit existing content.

Register a [FREE ACCOUNT](http://app.webriq.com/auth/regsiter/) to see all the above tools and much more in action.


