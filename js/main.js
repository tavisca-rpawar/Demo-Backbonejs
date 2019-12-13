const gadgetsCollection = new GadgetsCollection();
gadgetsCollection.fetch({
    success: function() {
        const gadgetListView = new GadgetListView({
            el: "#table-body",
            model: gadgetsCollection
        });
        gadgetListView.render();
    }
})