// Main coffee file for Backbuffer.

var Backbuffer = Ember.Application.create();
Backbuffer.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

Backbuffer.Router.map(function() {
    this.resource('data', {path: '/:data_id'});
})

Backbuffer.Data = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    closed: DS.attr('boolean'),
    assigned_to: DS.attr('string')
});

Backbuffer.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('data');
    },
});

Backbuffer.DataRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('data', params.data_id);
    }
});

Backbuffer.DataController = Ember.ObjectController.extend({
    basicInfoEdit: false,
    assignedToEdit: false,

    actions: {
        editBasicInfo: function(cancel) {
            if (this.get('basicInfoEdit')) {
                this.set('basicInfoEdit', false);
            
                // Some code.
            } else {
                this.set('basicInfoEdit', true);

                // Some code.
            }
        },
        editAssignedTo: function(cancel) {
            if (this.get('assignedToEdit')) {
                this.set('assignedToEdit', false);

                // Some code.
            } else {
                this.set('assignedToEdit', true);

                // Some code.
            }
        },
        changeStatus: function() {
            this.set('closed', !this.get('closed'));
        },
    }
});
