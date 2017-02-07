import Ember from 'ember';

let venueList = [{
  id: 1,
  title: 'Flickerbox',
  link: 'http://flickerbox.com',
  address: 'contact me for viewing appointments',
  about: 'The Portland office of Flickerbox Inc., is the home base of Verge and where we got our start. It is located in downtown Portland. We hold monthly receptions for showing artists and are always available for viewing appointments. Please note, because this is a private office, there are no drop ins.'
},
{
  id: 2,
  title: 'The Red Fox',
  link: 'http://redfoxpdx.com',
  address: '5128 N. Albina, Portland OR 97217',
  about: 'This cozy, North Portland Bar has monthly rotating shows of local Portland emerging artists. Each month we host an artist reception. The bar is open 7 days a week, 3pm – 1:30am. They have great food too!'
}];


export default Ember.Route.extend({
		model(){
		return venueList;
	}
});
