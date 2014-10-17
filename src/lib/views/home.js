'use strict';

var Marionette = require('backbone.marionette'),
	Handlebars = require('handlebars');

var tpl = require('../templates/home.html');

var HomeView = Marionette.ItemView.extend({

	className: 'view-home',

	template: Handlebars.compile(tpl),

	render: function () {
		console.log('render home view');

		this.$el.html(
			this.template({ title: 'hello world' })
		);
	}

});

module.exports = HomeView;
