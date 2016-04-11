import Ember from 'ember';

export default Ember.Route.extend({
  collectionManager: Ember.inject.service(),

  model(params) {
    this.get(`collectionManager`)
      .setCollectionName(params.collection);

    return params.collection;
  },
});
