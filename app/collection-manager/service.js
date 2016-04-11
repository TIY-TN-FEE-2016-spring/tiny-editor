import Ember from 'ember';

export default Ember.Service.extend({
  collectionName: ``,
  store: [],

  setCollectionName(name) {
    this.set(`collectionName`, name);
  },
});
