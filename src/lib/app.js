'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var Router = require('./router');
var LayoutView = require('./views/layout');

var app = new Marionette.Application();

app.addRegions({
    mainRegion: "#main"
});

app.addInitializer(function () {
    console.log('render layout');
    app.layout = new LayoutView();
    app.mainRegion.show(app.layout);
});

app.addInitializer(function () {
    console.log('initialize router');
    var router = new Router({ layout: app.layout });
});

app.navigate = function (route,  options){
    options = options || {};
    Backbone.history.navigate(route, options);
};

app.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

app.on("before:start", function () {
    console.log('initialize application');
});

app.on("start", function () {
    if (Backbone.history) {
        Backbone.history.start();
    }
});

app.start();


module.exports = app;
