import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveCategoryToFirebase(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    }
  }
});
