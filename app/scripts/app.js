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

Backbuffer.Router.map(function() {
    this.resource('data', {path: '/'}, function() {
        this.route('word', {path: 'data/:data_id'});
        this.route('new');
    });
});

Backbuffer.DataIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('data');
    }
});

Backbuffer.DataWordRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('data', params.data_id);
    }
});

Backbuffer.DataNewRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('data/word');  // template is the same as edit with different
                              // controller.
    }
});

Backbuffer.DataController = Ember.ObjectController.extend({
    basicInfoEdit: false,
    assignedToEdit: false,

    actions: {
        editBasicInfo: function(cancel) {
            if (this.get('basicInfoEdit')) {
                this.set('basicInfoEdit', false);

                // Some code to save.
            } else {
                this.set('basicInfoEdit', true);
            }
        },
        editAssignedTo: function(cancel) {
            if (this.get('assignedToEdit')) {
                this.set('assignedToEdit', false);

                // Some code to save.
            } else {
                this.set('assignedToEdit', true);
            }
        },
        changeStatus: function() {
            this.set('closed', !this.get('closed'));
        },
    }
});

Backbuffer.NewController = Ember.ObjectController.extend({

});
