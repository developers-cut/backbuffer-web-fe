// Backbuffer Router and Routes.

Backbuffer.Router.map(function() {
    this.resource('data', {path: '/'}, function() {
        this.route('word', {path: '/:data_id'});
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
    model: function() {
        return {};
    }
});
