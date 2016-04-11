import Ember from 'ember';

export default Ember.Controller.extend({
  collectionManager: Ember.inject.service(),

  saveModel(id, data) {
    return this.get(`collectionManager`).update(id, data)
      .then(() => {
        this.transitionToRoute(`collection`);
      });
  },

  deleteModel(id) {
    if (confirm(`Are you sure you want to delete this record?`)) {
      this.get(`collectionManager`).destroyRecord(id)
        .then(() => {
          this.transitionToRoute(`collection`);
        });
    }
  },

  noop() {
  },
});
