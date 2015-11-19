'use strict';

var $ = require('jquery');
var NavView = require('../views/nav');

module.exports = {
  start: function () {
    $('body')
      .addClass('loading')
      .removeClass('search--open')
      .removeClass('events--open');

    setTimeout(function () {
      window.scrollTo(0, 0)
    }, 200);

    if ($('body').hasClass('nav--open')) {
      var navView = new NavView();
      navView.closeNav();
    }
  },

  end: function () {
    $('body').removeClass('loading');
  }
}
