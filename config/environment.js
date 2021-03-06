/* jshint node: true */

module.exports = function(environment) {
  // config/environment.js
  var ENV = {
    modulePrefix: 'verge-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },

      firebase: {
        apiKey: 'AIzaSyDN7OP9tW0H5oWa4whKpTZeVBeiVX0tTX4',
        authDomain: 'vergepdx-ember.firebaseapp.com',
        databaseURL: 'https://vergepdx-ember.firebaseio.com',
        storageBucket: 'vergepdx-ember.appspot.com',
        messagingSenderId: "812504370103"
      },

      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV.googleAnalytics = {
      webPropertyId: 'UA-93709908-1'
    };

  }

  return ENV;
};
