import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artist-gallery', 'Integration | Component | artist gallery', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{artist-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#artist-gallery}}
      template block text
    {{/artist-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
