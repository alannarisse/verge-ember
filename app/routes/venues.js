import Ember from 'ember';

let venueList = [{
  id: 1,
  title: 'Flickerbox',
  link: 'http://flickerbox.com',
  image: 'assets/images/venues/flickerbox348x220.jpg',
  address: 'contact me for viewing appointments',
  about: 'The Portland office of Flickerbox Inc., is the home base of Verge and where we got our start. It is located in downtown Portland. We hold monthly receptions for showing artists and are always available for viewing appointments. Please note, because this is a private office, there are no drop ins.'
},
{
  id: 2,
  title: 'The Red Fox',
  link: 'http://redfoxpdx.com',
  image: 'assets/images/venues/redfox348x220.jpg',
  address: '5128 N. Albina, Portland OR 97217',
  about: 'This cozy, North Portland Bar has monthly rotating shows of local Portland emerging artists. Each month we host an artist reception. The bar is open 7 days a week, 3pm – 1:30am. They have great food too!'
},
{
  id: 3,
  title: 'Akemi Salon',
  link: 'http://akemisalon.com',
  image: 'assets/images/venues/akemi348x220.png',
  address: '3808 N. Williams Ste D, Portland OR 97227',
  about: 'Located in the HUB building on N. Williams, Akemi Salon has been in business for 10 years. They are a cruelty-free salon.'
}];


export default Ember.Route.extend({
		model(){
		return venueList;
	}
});
