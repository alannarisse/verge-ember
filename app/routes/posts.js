import Ember from 'ember';

export default Ember.Route.extend({
	//this is causing the posts template to not render
  model() {
    return this.store.findAll('post');
  },
});
