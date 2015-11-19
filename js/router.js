'use strict';

var $ = require('jquery');
var Backbone = require('backbone');

// Require views
var HomeView = require('./views/home');
var StaticView = require('./views/static');
var SearchView = require('./views/search');
var EventsView = require('./views/events');
var VideosView = require('./views/videos');
var SingleView = require('./views/single');

// Require collections
var PostsCollection = require('./collections/posts');

Backbone.$ = $;

module.exports = Backbone.Router.extend({
  initialize: function () {
    this.bind('route', this.sendPageView);
  },

  sendPageView: function () {
    var path = Backbone.history.getFragment();
    ga('send', 'pageview', {page: "/" + path});
  },

  routes: {
    '': 'home',
    'page/:page/': 'page',
    'about/': 'static',
    'search/': 'search',
    'events/': 'events',
    'videos/': 'videos',
    ':slug/': 'single'
  },

  home: function () {
    var homeView = new HomeView({collection: new PostsCollection, page: 1, sticky: true});

    document.title = 'Life at Flywheel';
  },

  page: function (page) {
    var sticky;

    if (page == 1) {
      sticky = true;
    } else {
      sticky = false;
    }

    var homeView = new HomeView({collection: new PostsCollection, page: page, sticky: sticky});

    document.title = 'Page ' + page + ' - Life at Flywheel';
  },

  static: function () {
    var staticView = new StaticView({collection: new PostsCollection, slug: 'about'});
  },

  search: function () {
    var searchView = new SearchView();
    searchView.render();

    document.title = 'Search - Life at Flywheel';
  },

  events: function () {
    var eventsView = new EventsView({collection: new PostsCollection, page: 1});

    document.title = 'Events - Life at Flywheel';
  },

  videos: function () {
    var videosView = new VideosView({collection: new PostsCollection, page: 1, type: 'video'});

    document.title = 'Videos - Life at Flywheel';
  },

  single: function (slug) {
    var singleView = new SingleView({collection: new PostsCollection, slug: slug});
  }
});
