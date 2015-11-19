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
    this.page = options.page;
    this.fetch();

    transition.start();
  },

  fetch: function () {
    var self = this;

    this.collection.fetch({
      processData: true,
      data: $.param({
        action: 'return_events',
        page: self.page
      }),
      success: function (data) {
        var result = data.toJSON();
        self.render(result);
      }
    });
  },

  render: function (data) {
    var template = twig({
      href: '/wp-content/themes/flylife/templates/events.twig',
      async: false
    });

    // render the template
    var templateRendered = template.render({posts: data});
    this.$el.html(templateRendered);

    transition.end();
    $('body').addClass('events--open');

    $(document).scrollTop(0);
  }
});
