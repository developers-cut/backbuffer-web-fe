// Main coffee file for Backbuffer.

var Backbuffer = Ember.Application.create();
Backbuffer.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

Backbuffer.Router.map(function() {
    this.resource('data', {path: '/:data_id'});
});

Backbuffer.Data = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    closed: DS.attr('boolen'),
    assigned_to: DS.attr('string')
});

Backbuffer.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('data');
    }
});

Backbuffer.DataRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('data', params.data_id);
    }
});
