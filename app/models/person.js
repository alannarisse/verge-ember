import DS from 'ember-data';


export default DS.Model.extend({

  firstName: DS.attr(),
  lastName: DS.attr(),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })




});
