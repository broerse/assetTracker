import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function() {
    this.set('name', Ember.Object.create());
  },
  actions: {
    addName: function() {
      var newName = this.store.createRecord('name', {
        name: this.get('name')
      });
      newName.save();
    }
  }

});
