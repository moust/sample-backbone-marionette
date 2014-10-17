'use strict';

var Marionette = require('backbone.marionette'),
    HomeView = require('./views/home'),
    AboutView = require('./views/about');

var Router = Marionette.AppRouter.extend({

    routes : {
        '': 'default',
        'about': 'about'
    },

    default: function () {
        var view = new HomeView();
        this.options.layout.content.show(view);
    },

    about: function () {
        var view = new AboutView();
        this.options.layout.content.show(view);
    }

});

module.exports = Router;
