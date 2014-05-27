// Main coffee file for Backbuffer.

var Backbuffer = Ember.Application.create();
Backbuffer.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

Backbuffer.Router.map(function() {
    this.resource('data', {path: '/'});
})

Backbuffer.Data = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    closed: DS.attr('boolen'),
    assigned_to: DS.attr('string')
});

Backbuffer.DataRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('data');
    }
});
// Fixtures for Data model - Backbuffer.

Backbuffer.Data.FIXTURES = [
    {
        id: 1,
        title: 'Prototype backbuffer',
        description: 'Do a simple html page with a couple of tasks to figure out how backbuffer looks best.',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 2,
        title: 'Associate roles',
        description: 'Write roles for D/C - ideas: partner (stakeholders), non-funding belongers (Cutter), specific team dev.',
        closed: true,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 3,
        title: 'Templates in vim?',
        description: 'Search for a method of handling templates in vim; if it exists, snatch it!',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 4,
        title: 'Font in backbuffer',
        description: 'Do a font test for BkB',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 5,
        title: 'New movies for my list',
        description: "Little Miss Sunshine, Leatherheads, Get Smart, Rio (1 and 2), Days of the Future Past, Bourne trilogy, The Wolf of Wall Street, Hairspray, Gone with the Wind, Casablanca, Misery, Four Weddings and a Funeral, Breakfast at Tiffany's, Annie Hall, Zoolander, Catching Fire",
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 6,
        title: 'Ideas for BkB',
        description: '* include markdown support in description\n* save filters and reopen app with the same filters\n* Item groups (buffer sets) that share the same ACLs (see what Google Docs does when you try to modify ACLs in a shared folder)',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 7,
        title: 'Config lint',
        description: '* SCSS Lint\n* Jade lint\n* Python lint (Google codestyle pylint)',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 8,
        title: 'Config git hook',
        description: '* Not able to commit to production branch.\n* check lint before commit.\n* compile files before commit.',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },
    {
        id: 9,
        title: 'Figure a way of compiling SCSS, Coffee and Jade during deploy',
        description: '',
        closed: false,
        assigned_to: 'thomas@developerscut.co.uk'
    },

];
var converter = new Markdown.Converter();

Ember.Handlebars.helper('markdown', function(value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    return new Handlebars.SafeString(converter.makeHtml(escaped));
});
