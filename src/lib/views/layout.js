'use strict';

var Marionette = require('backbone.marionette'),
    Handlebars = require('handlebars');

var HeaderView = require('./header'),
    tpl = require('../templates/layout.html');

var LayoutView = Marionette.LayoutView.extend({

    template: Handlebars.compile(tpl),

    ui: {
        app: '#app'
    },

    // define regions
    regions: {
        header: '#header',
        content: '#content'
    },

    onShow: function() {
        this.header.show(new HeaderView());
    }

});

module.exports = LayoutView;
