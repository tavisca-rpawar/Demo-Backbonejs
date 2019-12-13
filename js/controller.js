const GadgetsCollection = Backbone.Collection.extend({
    url: './JSON-data/gadget-list.json',
    model: Mobile,
    parse: function(data) {
        return data.gadget;
    }
});