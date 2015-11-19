'use strict';

var $ = require('jquery');
var SearchView = require('../views/search');
var searchView = new SearchView();

module.exports = {
  events: function () {
    $('.search__input').on('input', searchView.search);
  }
}
