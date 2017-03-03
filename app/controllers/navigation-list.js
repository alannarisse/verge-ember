import Ember from 'ember';

export default Ember.Controller.extend({


// toggle collapse workaround found here: https://gist.github.com/basz/99772922468152fb946d
topNavbarCollapse: true,
  actions: {
    toggleNavbarCollapse() {
      this.toggleProperty('topNavbarCollapse');
    }
  }
});
