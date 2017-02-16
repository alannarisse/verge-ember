import Ember from 'ember';

let berlinGallery = [{
  id: 1,
  image: '/assets/images/berlin220sq.jpg',
  imgname: 'Jason Berlin',
  info: 'jason things',
  caption: 'jason things 1'
},
{
  id: 2,
  image: '/assets/images/mulder220sq.jpg',
  imgname: 'Rachel Mulder',
  info: 'jason other things',
  caption: 'jason things 2'
}];


export default Ember.Route.extend({
		model(){
		return berlinGallery;
	},
});
