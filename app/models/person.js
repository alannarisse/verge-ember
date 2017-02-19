import DS from 'ember-data';


export default DS.Model.extend({

  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

var newPerson = this.store.createRecord('person', {
	  firstName: 'Alanna',
	  lastName: 'Risse'
	});
	newPerson.save();
