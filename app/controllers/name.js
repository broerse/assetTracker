import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    addName: function() {
      var newPost = this.get('store').createRecord('name');
      this.get('target').transitionTo('name', newPost.save());
    }
  },
  sortProperties: ['first']
});