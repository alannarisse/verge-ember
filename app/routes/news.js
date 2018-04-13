import Ember from 'ember';

export default Ember.Route.extend({
	headTags: [{
      type: 'meta',
      tagId: 'meta-og-name',
      attrs: {
        property: 'og:name',
        content: 'VergePDX News'
      }
    }]
});
