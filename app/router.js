import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('venues');
  this.route('artists');
  this.route('exhibitions');
  this.route('contacts');
  this.route('simione');
});

export default Router;
