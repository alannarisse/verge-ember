import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('berlin-gallery', 'Integration | Component | berlin gallery', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{berlin-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#berlin-gallery}}
      template block text
    {{/berlin-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
