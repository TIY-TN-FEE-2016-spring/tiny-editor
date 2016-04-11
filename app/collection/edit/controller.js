import Ember from 'ember';

export default Ember.Controller.extend({
  collectionManager: Ember.inject.service(),

  saveModel(id, data) {
    return this.get(`collectionManager`).update(id, data)
      .then(() => {
        this.transitionToRoute(`collection`);
      });
  },
});
