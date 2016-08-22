import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var date = new Date().getTime();
      var params = {
        category: this.get('category'),
        name: this.get('name') ? this.get('name'): "",
        poster: this.get('poster') ? this.get('poster'): "",
        imageUrl: this.get('imageUrl') ? this.get('imageUrl'): "",
        description: this.get('description') ? this.get('description'): "",
        price: this.get('price') ? this.get('price'): "",
        date
      };
      this.sendAction('saveListingToFirebase', params);
    }
  }
});
