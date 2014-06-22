// Main coffee file for Backbuffer.

var Backbuffer = Ember.Application.create();
Backbuffer.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

Backbuffer.Data = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    closed: DS.attr('boolean'),
    assigned_to: DS.attr('string')
});
