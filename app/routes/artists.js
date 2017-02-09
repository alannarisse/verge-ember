import Ember from 'ember';

let artistList = [{
  id: 1,
  image: 'assets/images/berlin220sq.jpg',
  title: 'Jason Berlin',
  page: 'berlin',
  link: 'http://jasonberlinthomas.com',
  about: 'My art practice includes the medium of oil painting, sculpture, installation, college, and curation. I privilege play through improvisational fabrication and utilizes camp as a way to speak to queer sexuality.'
},
{
  id: 2,
  image: 'assets/images/risse220sq.jpg',
  title: 'Alanna Risse',
  page: 'risse',
  link: 'http://alannarisse.com',
  about: 'Let art be an experience. Free it from its frame, it’s pedestal. Shatter the glass that seals it off from the world. Let it absorb finger grease, get dropped, dinged, damaged. Give it life, let it into our lives. Put it in unexpected places. Share it, don’t squander it. Art doesn’t need anyone’s protection. Set it free.'
},
{
  id: 3,
  image: 'assets/images/reeves220sq.jpg',
  title: 'Veronica Reeves',
  page: 'reeves',
  link: 'http://www.v2r2please.com/',
  about: 'I look for descriptions and visuals that collapse the conceived separation between self and environment and expand the perception of being an Earth bound body. Accompanying this interest includes the challenge of sharing the Earth’s vulnerability through the lens of personal narrative. Paint and process become my metaphors for emotional, bodily, and Earthly processes in which I layer indications of landscapes, structures, and figures.'
},
{
  id: 4,
  image: 'assets/images/simione220sq.jpg',
  title: 'Angela Simione',
  page: 'simione',
  link: 'http://angelasimione.weebly.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 5,
  image: 'assets/images/barce220sq.jpg',
  title: 'Epochal Void',
  page: 'void',
  link: 'http://epochalvoid.com/',
  about: 'Specializing in conceptual drawing, printmaking, mixed media art, paper sculpture, lettering and collage, EV creates bodies of work which explore concepts of impermanence, betweenness, as well as social & spiritual bondage. The process is, itself, a gesture of freedom, of liberation from the constraint of measurement, of definition, of expectation.'
},
{
  id: 6,
  image: 'assets/images/nelson220sq.jpg',
  title: 'Kara Nelson',
  page: 'nelson',
  link: 'http://www.karanelson.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 7,
  image: 'assets/images/morin220sq.jpg',
  title: 'Bertrand Morin',
  page: 'morin',
  link: 'http://bertrandmorin.net/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 8,
  image: 'assets/images/kruse220sq.jpg',
  title: 'Brandi Kruse',
  page: 'kruse',
  link: 'http://www.brandikruse.com/',
  about: 'Many of these pieces are part of an ongoing body of work in which excerpts from her photographs are presented as framing devices. This process allows her to elevate the overlooked and question relationships. There is tension to be explored between presence and erasure, past and potential, the tangible and the imagination, the written and the reader.'
},
{
  id: 9,
  image: 'assets/images/schlunegger220sq.jpg',
  title: 'Danielle Schlunegger-Warner',
  page: 'schlunegger',
  link: 'http://www.schlunegger.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 10,
  image: 'assets/images/reed220sq.jpg',
  title: 'Ehren Reed',
  page: 'reed',
  link: 'http://www.ehrenreed.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 11,
  image: 'assets/images/lorish220sq.jpg',
  title: 'A•C•M Lorish',
  page: 'lorish',
  link: 'http://www.acmlorish.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 12,
  image: 'assets/images/mcgovern220sq.jpg',
  title: 'Kelly McGovern',
  page: 'mcgovern',
  link: 'http://www.acmlorish.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 13,
  image: 'assets/images/miyamoto220sq.jpg',
  title: 'Kanani Miyamoto',
  page: 'miyamoto',
  link: 'http://c-k-miyamoto.tumblr.com/',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus ligula, tincidunt condimentum lectus. Maecenas elementum libero ut ipsum varius, ac pretium magna placerat. Aenean interdum ut quam et pharetra. Nulla facilisi. Nam convallis interdum libero iaculis accumsan.'
},
{
  id: 14,
  image: 'assets/images/mulder220sq.jpg',
  title: 'Rachel Mulder',
  page: 'mulder',
  link: 'https://rachelmulderart.blogspot.com/',
  about: 'Rachel Mulder earned her BFA in Printmaking from the Milwaukee Institute of Art & Design and has since adapted those printmaking techniques and processes into other art forms, namely drawing.'
}];


export default Ember.Route.extend({
	model(){
		return artistList;
	}
});
