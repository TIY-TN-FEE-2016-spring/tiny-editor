import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      json: JSON.stringify({
        name: `foo`,
      }, null, 2),
    };
  },
});
