'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Twig = require('twig');
var twig = Twig.twig;
var transition = require('../mixins/page_transition');
var sharrre = require('../mixins/sharrre');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function (options) {
    this.$el = $('#content');
    this.slug = options.slug;
    this.fetch();

    transition.start();
  },

  fetch: function () {
    var self = this;

    this.collection.fetch({
      processData: true,
      data: $.param({
        action: 'return_one',
        slug: self.slug
      }),
      success: function (data) {
        var result = data.toJSON();
        self.render(result[0]);
      }
    });
  },

  render: function (data) {
    document.title = data.title + ' - Life at Flywheel';

    var template = twig({
      href: '/wp-content/themes/flylife/templates/single.twig',
      async: false
    });

    // render the template
    var postsHTML = template.render({post: data});
    this.$el.html(postsHTML);

    transition.end();

    $(document).scrollTop(0);

    // Social sharing
    sharrre.init();
  }
});
