'use strict';

var Marionette = require('backbone.marionette'),
	Handlebars = require('handlebars');

var tpl = require('../templates/header.html');

var HeaderView = Marionette.ItemView.extend({

	className: 'header',

	template: Handlebars.compile(tpl),

	render: function () {
		console.log('render header view');

		this.$el.html(
			this.template()
		);
	}

});

module.exports = HeaderView;
