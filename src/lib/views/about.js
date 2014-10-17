'use strict';

var Marionette = require('backbone.marionette'),
	Handlebars = require('handlebars');

var tpl = require('../templates/about.html');

var AboutView = Marionette.ItemView.extend({

	className: 'view-about',

	template: Handlebars.compile(tpl),

	render: function () {
		console.log('render about view');

		this.$el.html(
			this.template({ title: 'about' })
		);
	}

});

module.exports = AboutView;
