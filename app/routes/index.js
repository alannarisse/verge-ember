import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller) {
		//Set the IndexController's 'title'
		controller.set('title', 'Current Exhibitions');
	}
	
});
