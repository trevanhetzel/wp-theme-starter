'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Twig = require('twig');
var twig = Twig.twig;

Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: 'body',
  domEl: '#nav',

  events: {
    'keydown': 'handleEscapeKey'
  },

  initialize: function () {
    this.$el.addClass('nav--open');
    this.render();
  },

  render: function () {
    var template = twig({
      href: '/wp-content/themes/flylife/templates/nav.twig',
      async: false
    });
    
    // render the template
    var templateRendered = template.render();
    $(this.domEl).html(templateRendered);
  },

  handleEscapeKey: function (e) {
    if (e.keyCode === 27 ) {
      this.closeNav();
    }
  },

  closeNav: function () {
    this.$el.removeClass('nav--open');
    this.undelegateEvents();

    $(this.domEl).html('');
  }
});
