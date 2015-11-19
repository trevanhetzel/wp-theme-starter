'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    url: '/wp-admin/admin-ajax.php'
});
