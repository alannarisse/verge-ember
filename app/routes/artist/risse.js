import Ember from 'ember';

// array for creating gallery on risse 
// artist page using template on risse.hbs. 
// need to figure out how to get lightbox to 
// accept array items, then need to break out 
// template into a generic artist-gallery template 
// and pass in the right values.
let risseGallery = [{
	id: 1,
	image: '/assets/images/risse/dif.jpg',
	title: 'Taste the Dif',
	dimensions: '10x10',
	materials: 'oil on canvas',
	year: '2016'
},
{
	id: 2,
	image: '/assets/images/risse/odalisque.jpg',
	title: 'Odalisque',
	dimensions: '16x16',
	materials: 'Oil on Canvas',
	year: '2016'
},
{
	id: 3,
	image: '/assets/images/risse/freckles.jpg',
	title: 'Freckles',
	dimensions: '10x10',
	materials: 'Oil on Canvas',
	year: '2016'
},
{
	id:4,
	image: 'assets/images/risse/pie.jpg',
	title: 'Pie',
	dimensions: '20x10',
	materials: 'Pastel on Paper',
	year: '2016'
},
{
	id: 5,
	image: 'assets/images/risse/spritzer.jpg',
	title: 'Spritzer',
	dimensions: '20x10',
	materials: 'Pastel on Paper',
	year: '2016'
},
{
	id: 6,
	image: 'assets/images/risse/peelup.jpg',
	title: 'Don\'t Peel Up On Me',
	dimensions: '9x12',
	materials: 'Oil on Canvas',
	year: '2016'
}];


export default Ember.Route.extend({
	model(){
		return risseGallery;
	}
});
