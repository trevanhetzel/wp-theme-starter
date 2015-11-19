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
    this.type = options.type;
    this.fetch();

    transition.start();
  },

  fetch: function () {
    var self = this;

    this.collection.fetch({
      processData: true,
      data: $.param({
        action: 'return_all',
        page: self.page,
        type: self.type
      }),
      success: function (data) {
        var result = data.toJSON();
        var pagination = result[0].pagination;
        delete result[0].pagination;
        self.render(result[0], pagination);
      }
    });
  },

  render: function (data, pagination) {
    var template = twig({
      href: '/wp-content/themes/flylife/templates/videos.twig',
      async: false
    });
    
    // render the template
    var templateRendered = template.render({posts: data, pagination: pagination});
    this.$el.html(templateRendered);

    transition.end();

    $(document).scrollTop(0);
  }
});
