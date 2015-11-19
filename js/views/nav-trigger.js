'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Twig = require('twig');
var twig = Twig.twig;
var NavView = require('./nav');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#header-controls',

  events: {
    'click #trigger-nav': 'renderNav'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    var template = twig({
      href: '/wp-content/themes/flylife/templates/nav-trigger.twig',
      async: false
    });
    
    // render the template
    var templateRendered = template.render();
    this.$el.prepend(templateRendered);
  },

  renderNav: function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($('body').hasClass('nav--open')) {
      var navView = new NavView();
      navView.closeNav();
    } else {
      var navView = new NavView();
    }
  }
});
