'use strict';

var $ = require('jquery');

module.exports = {
  init: function (el) {
    var self = this;

    $(window).on('scroll', function () {
      self.scroll(el);
    });
  },

  scroll: function (el) {
    var $el = $(el),
      height = 500,
      top = $el.offset().top - 66,
      scrollTop = $(window).scrollTop(),
      windowHeight = window.innerHeight,
      scrollPerc = (top) / (windowHeight),
      val = Math.round((height * scrollPerc));

    $el.css('transform', "translate3D(0, -" + val + "px, 0)");
  }
}
