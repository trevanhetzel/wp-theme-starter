'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Twig = require('twig');
var twig = Twig.twig;
var transition = require('../mixins/page_transition');
var debounce = require('../mixins/debounce');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#content',

  events: {
    'input .search__input': 'search'
  },

  render: function () {
    transition.start();
    
    var template = twig({
      href: '/wp-content/themes/flylife/templates/search.twig',
      async: false
    });
    
    // render the template
    var templateRendered = template.render();
    this.$el.html(templateRendered);

    transition.end();
    $('body').addClass('search--open');
    $('.search__input').focus();

    $(document).scrollTop(0);
  },

  search: debounce.init(function (e) {
    if ($(e.target).val().length > 2) {
      $('body').addClass('searching');
      
      $.ajax({
        processData: true,
        type: 'get',
        url: '/wp-admin/admin-ajax.php',
        data: $.param({
          action: 'return_all',
          s: $(e.target).val()
        }),
        success: function (data) {
          var result = $.parseJSON(data);
          delete result.pagination;

          var template = twig({
            href: '/wp-content/themes/flylife/templates/search-results.twig',
            async: false
          });

          // render the template
          var postsHTML = template.render({posts: result});
          $('#search-results').html(postsHTML);

          $('body').removeClass('searching');
        }
      });
    } else {
      $('#search-results').html('');
    }
  }, 200)
});
