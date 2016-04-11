import Ember from 'ember';

export default Ember.Route.extend({
  collectionManager: Ember.inject.service(),

  model(params) {
    return this.get(`collectionManager`).findById(params._id)
      .then((resource) => {
        return {
          json: JSON.stringify(resource, null, 2),
          _id: resource._id,
        };
      });
  },
});
