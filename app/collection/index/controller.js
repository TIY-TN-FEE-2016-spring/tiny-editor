import Ember from 'ember';

export default Ember.Controller.extend({
  collectionManager: Ember.inject.service(),

  refreshModel() {
    this.get(`collectionManager`).findAll()
      .then((result) => {
        this.set(`model`, result);
      });
  },
});
