//Mobile Model
const Mobile = Backbone.Model.extend({
    defaults: {
        name: '',
        description: '',
        price: 0
    }
});
const Tablet = Backbone.Model.extend();

// Create Gadget Collection
const GadgetsCollection = Backbone.Collection.extend({
    model: Mobile, Tablet
});
const gadgetsCollection = new GadgetsCollection([
    new Mobile({ name: "IPhone XR", price: 49000 }),
    new Mobile({ name: "Samsung S10", price: 63000 }),
    new Tablet({ name: "Surface Pro", price: 102000}),
    new Tablet({ name: "IPad 6", price: 72000}),

]);
// Create Gadgets View
const GadgetsView = Backbone.View.extend({
    el: '#table-body',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html('');
        gadgetsCollection.each(function (gadget) {
            const gadgetView = new GadgetView({ model: gadget });
            this.$el.append(gadgetView.render().el);
        }.bind(this));
        return this;
    }
});
// Create Gadget View
const GadgetView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#gadget-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
// Launch app
var app = new GadgetsView;