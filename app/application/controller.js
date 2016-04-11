import Ember from 'ember';

export default Ember.Controller.extend({
  switchCollection(collection) {
    this.transitionToRoute(`collection`, collection);
  },
});
