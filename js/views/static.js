'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Twig = require('twig');
var twig = Twig.twig;
var transition = require('../mixins/page_transition');

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
        action: 'return_page',
        slug: self.slug
      }),
      success: function (data) {
        var result = data.toJSON();
        console.log(result);
        self.render(result[0]);
      }
    });
  },

  render: function (data) {
    document.title = 'About - Life at Flywheel';

    var template = twig({
      href: '/wp-content/themes/flylife/templates/static.twig',
      async: false
    });

    // render the template
    var postsHTML = template.render({post: data});
    this.$el.html(postsHTML);

    transition.end();

    $(document).scrollTop(0);
  }
});
