import Ember from 'ember';

export default Ember.Route.extend({
  collectionManager: Ember.inject.service(),

  model() {
    return this.get(`collectionManager`).findAll();
  }
});
