import Ember from 'ember';
import RespondsToEscKeydownMixin from 'ember-responds-to/mixins/responds-to-esc-keydown';
import { module, test } from 'qunit';

module('mixin:responds-to-esc-keydown');

// Replace this with your real tests.
test('it works', function (assert) {
  var RespondsToEscKeydownObject = Ember.Object.extend(RespondsToEscKeydownMixin);
  var subject = RespondsToEscKeydownObject.create();
  assert.ok(subject);
});
