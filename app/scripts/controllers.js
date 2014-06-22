Backbuffer.DataWordController = Ember.ObjectController.extend({
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

Backbuffer.DataNewController = Backbuffer.DataWordController.extend({
    actions: {
        createData: function() {

        }
    }
});
