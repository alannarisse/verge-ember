import Ember from 'ember';

let artistList = [{
  id: 1,
  image: 'assets/images/berlin220sq.jpg',
  title: 'Jason Berlin',
  link: 'http://jasonberlinthomas.com',
  about: 'My art practice includes the medium of oil painting, sculpture, installation, college, and curation. I privilege play through improvisational fabrication and utilizes camp as a way to speak to queer sexuality.'
},
{
  id: 2,
  image: 'assets/images/risse220sq.jpg',
  title: 'Alanna Risse',
  link: 'http://alannarisse.com',
  about: 'Let art be an experience. Free it from its frame, it’s pedestal. Shatter the glass that seals it off from the world. Let it absorb finger grease, get dropped, dinged, damaged. Give it life, let it into our lives. Put it in unexpected places. Share it, don’t squander it. Art doesn’t need anyone’s protection. Set it free.'
},
{
  id: 3,
  image: 'assets/images/reeves220sq.jpg',
  title: 'Veronica Reeves',
  link: 'http://www.v2r2please.com/',
  about: 'I look for descriptions and visuals that collapse the conceived separation between self and environment and expand the perception of being an Earth bound body. Accompanying this interest includes the challenge of sharing the Earth’s vulnerability through the lens of personal narrative. Paint and process become my metaphors for emotional, bodily, and Earthly processes in which I layer indications of landscapes, structures, and figures.'
}];


export default Ember.Route.extend({
	model(){
		return artistList;
	}
});
