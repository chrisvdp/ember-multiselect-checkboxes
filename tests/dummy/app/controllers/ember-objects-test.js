import EmberObject from '@ember/object';
import Controller from '@ember/controller';

var Person = EmberObject.extend({
  name: null,

  gender: null
});

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.persons = [
      Person.create({ name: "Lisa", gender: "Female" }),
      Person.create({ name: "Bob", gender: "Male" }),
      Person.create({ name: "John", gender: "Male"})
    ];
    this.selectedPersons = [];
  },

  personsDisabled: false,

  actions: {
    selectAllPersons: function() {
      this.set("selectedPersons", this.get('persons').slice());
    },

    clearPersons: function() {
      this.set("selectedPersons", []);
    },

    toggleDisabled: function() {
      this.toggleProperty("personsDisabled");
    }
  }
});
