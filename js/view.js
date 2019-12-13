// Create Gadget View
var GadgetView = Backbone.View.extend({
    tagName: 'tr',
    render: function () {
        var self = this;
        $.get("./templates/gadget-list/gadget-list.html", function(data){
            const template= _.template(data);
            console.log(self);
            self.$el.html(template(self.model.toJSON()));
        });
        return self;
    }
});
// Create Gadgets View
var GadgetListView = Backbone.View.extend({
    render: function () {
        this.model.each(gadget => {
            var gadgetView = new GadgetView({model: gadget});
            this.$el.append(gadgetView.render().$el);
        });
        return this;
    }
});