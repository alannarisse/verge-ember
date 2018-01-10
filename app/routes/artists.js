import Ember from 'ember';

let artistList = [

{
  id: 1,
  image: 'assets/images/thumbs/weisenburger220sq.jpg',
  title: 'Mary Weisenburger',
  page: 'artist.weisenburger',
  link: 'http://marsjoyofpainting.com',
  about: 'Weisenburger currently lives and works in Portland, Oregon creating new paintings out of a historic building in the NE industrial neighborhood. She holds a BFA from Pacific Northwest College of Art and currently works as a Product Specialist for Gamblin Artists Colors.'
},
{
  id: 2,
  image: 'assets/images/thumbs/voidv2_220sq.jpg',
  title: 'Epochal Void',
  page: 'artist.void',
  link: 'http://epochalvoid.com/',
  about: 'Specializing in conceptual drawing, printmaking, mixed media art, paper sculpture, lettering and collage, EV creates bodies of work which explore concepts of impermanence, betweenness, as well as social & spiritual bondage. The process is, itself, a gesture of freedom, of liberation from the constraint of measurement, of definition, of expectation.'
},
{
  id: 3,
  image: 'assets/images/thumbs/rissem220sq.jpg',
  title: 'Alanna Risse',
  page: 'artist.risse',
  link: 'http://alannarisse.com',
  about: 'Alanna Risse is the curator and mastermind behind Verge PDX. She is an installation artist, mother, and web developer. She holds a Bachelors of Fine Art from California College of the Arts and a Masters of Fine Art from Pacific Northwest College of Art.'
},
{
  id: 4,
  image: 'assets/images/thumbs/vanover220sqv2.jpg',
  title: 'Rhonda Vanover',
  page: 'artist.vanover',
  link: 'http://rhondavanover.com/',
  about: 'Rhonda Vanover has been honored by Pictures of the Year International, Women in Photojournalism, and The National Press Photographers Association. She is a professor at Ithica College. She received her MFA in Visual Studies from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.'
},
{
  id: 5,
  image: 'assets/images/thumbs/miyamoto220sq.jpg',
  title: 'Kanani Miyamoto',
  page: 'artist.miyamoto',
  link: 'http://c-k-miyamoto.tumblr.com/',
  about: 'Kanani Miyamoto is a printmaker, teacher, and muralist. She received his MFA in Print Media from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.'
},
{
  id: 6,
  image: 'assets/images/thumbs/harding220sq.jpg',
  title: 'Bryn Harding',
  page: 'artist.harding',
  link: 'http://brynhardingart.com/',
  about: 'Bryn Harding (MFA in Print Media, PNCA 2017) is an artists living and working in Portland. The paintings in this show were made after a summer spent behind the wheel and too much time pondering what roads do to landscapes and to our spirits.'
},
{
  id: 7,
  image: 'assets/images/thumbs/haberman220sq.jpg',
  title: 'Chris Haberman',
  page: 'artist.haberman',
  link: 'https://www.facebook.com/chris.haberman',
  about: 'All of Habermans artwork is created recycled objects, found material from the streets and alleyways of his hometown, focusing on subjects like people, politics, the region, pop-culture, media, music, film and literature.'
},
{
  id: 8,
  image: 'assets/images/thumbs/reeves_akemi220sq.jpg',
  title: 'Veronica Reeves',
  page: 'artist.reeves',
  link: 'http://veronicareevesart.com/',
  about: 'I look for descriptions and visuals that collapse the conceived separation between self and environment and expand the perception of being an Earth bound body. Accompanying this interest includes the challenge of sharing the Earth’s vulnerability through the lens of personal narrative. Paint and process become my metaphors for emotional, bodily, and Earthly processes in which I layer indications of landscapes, structures, and figures.'
},
{
  id: 9,
  image: 'assets/images/thumbs/rittenhouse220sq.jpg',
  title: 'Alexis Rittenhouse',
  page: 'artist.rittenhouse',
  link: 'http://www.alexisrittenhouse.com/',
  about: 'Alexis Rittenhouses work is blobular and clumped, with an emphasis on the space between, and the world within worlds that is possible when examining groups on a specific surface.'
},
{
  id: 10,
  image: 'assets/images/thumbs/schneiderkvk220sq.jpg',
  title: 'Harry Schneider and Andreas Kindler von Knobloch',
  page: 'artist.schneider',
  link: 'http://mightyfineprintshop.com/',
  about: 'Harry Schneider is a print media artist. His work investigates everyday experience and elevates seemingly mundane moments. He received his MFA in Print Media from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.'
},
{
  id: 11,
  image: 'assets/images/thumbs/beaver220sq.jpg',
  title: 'Johnny Beaver',
  page: 'artist.beaver',
  link: 'https://www.johnnybeaverart.com',
  about: 'Johnny Beaver has spent the last 18 years practicing everything from web and graphic design, music composition and production, instrument / effect design, photography, sculpture, and more.'
},
{
  id: 12,
  image: 'assets/images/thumbs/cranmore220sq.jpg',
  title: 'W.S. Cranmore',
  page: 'artist.cranmore',
  link: 'https://www.artfinder.com/ws_cranmore',
  about: 'W.S. Cranmore is a stream of consciousness abstract artist living in Milwaukie Oregon.'
},
{
  id: 13,
  image: 'assets/images/thumbs/kress220sq.jpg',
  title: 'Kim Kress',
  page: 'artist.kress',
  link: 'http://www.suitectattoo.com/',
  about: 'Kim Kress is an artist and a tattoo artist. She has been tattooing since 2003, and is the owner of Suite C Tattoo in SE Portland, OR.'
},
{
  id: 14,
  image: 'assets/images/thumbs/quiroz220sq.jpg',
  title: 'Amanda Quiroz',
  page: 'artist.quiroz',
  link: 'http://amandaquiroz.com',
  about: 'Amanda Quiroz draws from her personal entomological collection to explore themes of mortality and humility within Catholicism. Her intricate drawings of insects and the very dust from the air seek to illuminate the invisible.'
},
{
  id: 15,
  image: 'assets/images/thumbs/simione220sq.jpg',
  title: 'Angela Simione',
  page: 'artist.simione',
  link: 'http://angelasimione.weebly.com/',
  about: 'Angela Simione is a New York painter and writer with a tremendous appreciation for all things black and white. She graduated from California College of the Arts in 2008 with High Distinction in Painting and Drawing.'
},
{
  id: 16,
  image: 'assets/images/thumbs/mulder220sq.jpg',
  title: 'Rachel Mulder',
  page: 'artist.mulder',
  link: 'https://rachelmulderart.blogspot.com/',
  about: 'Rachel Mulder earned her BFA in Printmaking from the Milwaukee Institute of Art & Design and has since adapted those printmaking techniques and processes into other art forms, namely drawing.'
},
{
  id: 17,
  image: 'assets/images/thumbs/schlunegger220sq.jpg',
  title: 'Danielle Schlunegger-Warner',
  page: 'artist.schlunegger',
  link: 'http://www.schlunegger.com/',
  about: 'Danielle Schlunegger-Warner grew up amongst the shell shops and sand dunes of Ventura, CA. Her artwork is strongly influenced by 18th century Cabinets of Curiosity and early explorers.'
},
{
  id: 18,
  image: 'assets/images/thumbs/berlin220sq.jpg',
  title: 'Jason Berlin',
  page: 'artist.berlin',
  link: 'http://jasonberlinthomas.com',
  about: 'My art practice includes the medium of oil painting, sculpture, installation, college, and curation. I privilege play through improvisational fabrication and utilizes camp as a way to speak to queer sexuality.'
},
{
  id: 19,
  image: 'assets/images/thumbs/mcgovern220sq.jpg',
  title: 'Kelly McGovern',
  page: 'artist.mcgovern',
  link: 'http://kelly-mcgovern.com',
  about: 'Kelly McGovern is a multimedia artist. Her work explores motion and language in hopes of finding comfort in escape. She has shown nationally in several major cities including New York, Philadelphia, Washington DC, Salt Lake City, and Portland Oregon, as well as internationally in Hereford, UK. She received her BFA from Moore College of Art and Design in Philadelphia, Pennsylvania and received her MFA from the Hallie Ford School of Graduate Studies at Pacific Northwest College of Art in Portland, Oregon.'
},
{
  id: 20,
  image: 'assets/images/thumbs/nelson220sq.jpg',
  title: 'Kara Nelson',
  page: 'artist.nelson',
  link: 'http://www.karanelson.com/',
  about: 'Kara Nelson is an artist living and working in the Oakland, CA. She uses her own trash to collage images of landscapes and make small-scale, abstract, and sometimes functional sculptures. '
},
{
  id: 21,
  image: 'assets/images/thumbs/morin220sq.jpg',
  title: 'Bertrand Morin',
  page: 'artist.morin',
  link: 'http://bertrandmorin.net/',
  about: 'I use written and photographic observations as the foundation for the creation of fictional characters, alternate worlds, and illogical anthropologies. The various levels of obfuscation and revelation that the text and images provide for viewers is intended to place my work in a limbo between truth and fiction, and to bend the line between historical archive and pseudoscientific farce.'
},
{
  id: 22,
  image: 'assets/images/thumbs/kruse220sq.jpg',
  title: 'Brandi Kruse',
  page: 'artist.kruse',
  link: 'http://www.brandikruse.com/',
  about: 'Many of these pieces are part of an ongoing body of work in which excerpts from her photographs are presented as framing devices. This process allows her to elevate the overlooked and question relationships. There is tension to be explored between presence and erasure, past and potential, the tangible and the imagination, the written and the reader.'
},
{
  id: 23,
  image: 'assets/images/thumbs/lorish220sq.jpg',
  title: 'A•C•M Lorish',
  page: 'artist.lorish',
  link: 'http://www.acmlorish.com/',
  about: 'A•C•M• Lorish was born in Eugene, Oregon. He studied at School of the Art Institute of Chicago, and Pacific Northwest College of Art where in 2013 he received his MFA in Visual Studies. Selected exhibitions include False Front in Portland, Rockerill in Charleroi Belgium, and dOCUMENTA (13) in Kassel, Germany. He is a founding member of the art collective Danger Punch. He lives and works in Portland Oregon.'
},
{
  id: 24,
  image: 'assets/images/thumbs/reed220sq.jpg',
  title: 'Ehren Reed',
  page: 'artist.reed',
  link: 'http://www.ehrenreed.com/',
  about: 'Using found photographs re-processed through digital manipulation and her signature stitching technique, Ehren Reed’s work examines the value we place on memory in the current digital environment. Her most recent work employs photographs pulled from yearbooks and photo albums discovered at thrift stores— once keepsakes to treasure, now cast aside and forgotten.'
}
];


export default Ember.Route.extend({
	model(){
		return artistList;
	},
});
