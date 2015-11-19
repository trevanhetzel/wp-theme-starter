'use strict';

var $ = require('jquery');
var sharrre = require('../vendor/sharrre');

module.exports = {
  init: function () {
    sharrre.init();

    // Facebook
    $('#share-fb').sharrre({
      share: {
        facebook: true
      },
      template: '<a href="#" class="share__fb">{total}</a>',
      enableHover: false,
      click: function (api, options){
        api.simulateClick();
        api.openPopup('facebook');
      }
    });

    // Twitter
    $('#share-tw').sharrre({
      share: {
        twitter: true
      },
      template: '<a href="#" class="share__tw">{total}</a>',
      enableHover: false,
      buttons: { twitter: {via: 'HeyFlywheel'}},
      click: function (api, options){
        api.simulateClick();
        api.openPopup('twitter');
      }
    });

    // LinkedIn
    $('#share-li').sharrre({
      share: {
        linkedin: true
      },
      template: '<a href="#" class="share__li">{total}</a>',
      enableHover: false,
      click: function (api, options){
        api.simulateClick();
        api.openPopup('linkedin');
      }
    });
  }
}
