'use strict';

var $ = require('jquery');
var Backbone = require('backbone');

var Router = require('./router');
var router = new Router();
var transition = require('./mixins/page_transition');
var parallax = require('./mixins/parallax');
var sharrre = require('./mixins/sharrre');

// Nav trigger view (doesn't utilize router)
var NavTriggerView = require('./views/nav-trigger');
var navTriggerView = new NavTriggerView();

// Set silent to true to not load JS templates on page load
Backbone.history.start({ pushState: true, silent: true });

// Static search
var search = require('./mixins/static_search');
search.events();

// Hi-jink all links to route using slashes
$(document).on('click', 'a[data-internal]', function (e) {
  if (! $(e.currentTarget).parents('#wpadminbar').length) {
    var href = $(this).attr('href'),
      protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      e.preventDefault();
      router.navigate(href, true);
    }
  }
});

// Google analytics
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-35099371-1', 'auto');
ga('send', 'pageview');

// Parallax
parallax.init('.post__hero-link');

// Social sharing
sharrre.init();
