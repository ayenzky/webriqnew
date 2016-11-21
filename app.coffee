axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records      = require 'roots-records'
collections  = require 'roots-collections'
excerpt      = require 'html-excerpt'
moment       = require 'moment'
roots_rss_generator = require 'webriq-roots-rss-generator'
roots_webriq_sitemap = require 'webriq-roots-sitemap-v2'

monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', '**/blog-layout.*','**/main.*', '**/partners-backup.*']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)

  extensions: [
    records(
      characters: { file: "data/characters.json" }
      site: { file: "data/site.json" }
      files: { file: "data/files.json" }
    ),
    collections(folder: 'posts', layout: 'post'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),

    roots_webriq_sitemap (
      url: "https://www.webriq.com",
      folder: "public",
      directory: ["!admin", "!layouts"],
      file: "**/*.html"
    ),

    roots_rss_generator(
      folder: "posts"
      output: "feed.xml"
      maxcount: 15
      settings:
        title: "WebriQ | CMS for Static Pages and Shops"
        feed_url: "https://www.webriq.com/feed.xml"
        description: "CMS Static Websites, CMS Static Web Pages, Content Management System Static Websites, Content Management System Static Web Pages, Free CMS Static Pages, Cloud CMS Static Pages"
        site_url: "https://www.webriq.com"
      )

    


  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

  server:
   clean_urls: true