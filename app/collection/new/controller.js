import Ember from 'ember';

export default Ember.Controller.extend({
  collectionManager: Ember.inject.service(),

  saveModel(data) {
    return this.get(`collectionManager`).createRecord(data)
      .then(() => {
        this.transitionToRoute(`collection`, this.get(`collectionManager.collectionName`));
      });
  },
});
