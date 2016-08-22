import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async: true}),
  name: DS.attr(),
  poster: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  date: DS.attr()
});
