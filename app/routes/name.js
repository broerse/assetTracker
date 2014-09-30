import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var names = this.store.find('name');
    return names;
  }
});
