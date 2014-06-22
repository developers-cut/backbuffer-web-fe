// Handlebars helpers: currently there's only the markdown helper.

var converter = new Markdown.Converter();

Ember.Handlebars.helper('markdown', function(value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    return new Handlebars.SafeString(converter.makeHtml(escaped));
});
