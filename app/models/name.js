import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr('string', {defaultValue: ''})
});
