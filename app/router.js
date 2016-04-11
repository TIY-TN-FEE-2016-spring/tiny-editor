import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function routes() {
  this.route(`collection`, { path: `/:collection` }, function routes() {
    this.route(`edit`, { path: `/:_id` });
    this.route('new');
  });
});

export default Router;
