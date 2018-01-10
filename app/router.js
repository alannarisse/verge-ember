import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('about');
  this.route('venues');
  this.route('artists');
  this.route('exhibitions', function() {
    this.route('previous');
  });
  this.route('contacts');

  this.route('page-not-found', {
    path: '/*path'
  });


  this.route('artist', function() {
    this.route('berlin', { path: '/berlin' });
    this.route('kruse', { path: '/kruse' });
    this.route('lorish');
    this.route('mulder');
    this.route('void');
    this.route('simione');
    this.route('schlunegger');
    this.route('risse');
    this.route('reeves');
    this.route('reed');
    this.route('nelson');
    this.route('morin');
    this.route('miyamoto');
    this.route('mcgovern');
    this.route('quiroz');
    this.route('schneider');
    this.route('vanover');
    this.route('oldham');
    this.route('cranmore');
    this.route('beaver');
    this.route('kress');
    this.route('rittenhouse');
    this.route('haberman');
    this.route('harding');
    this.route('weisenburger');
  });
  this.route('news');
  this.route('posts');
  this.route('stall-tokyo');
});

export default Router;
