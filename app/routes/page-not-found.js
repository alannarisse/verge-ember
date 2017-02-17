import Ember from 'ember';

export default Ember.Route.extend({

	redirect: function () {
    var url = this.router.location.formatURL('/page-not-found');
    if (window.location.pathname !== url) {
      this.transitionTo('/page-not-found');
    }
  }
});
