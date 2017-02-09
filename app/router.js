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
  this.route('risse');
  this.route('morin');
  this.route('kruse');
  this.route('schlunegger');
  this.route('nelson');
  this.route('lorish');
  this.route('berlin');
  this.route('reeves');
  this.route('mcgovern');
  this.route('mulder');
  this.route('void');
  this.route('miyamoto');
  this.route('reed');
});

export default Router;
