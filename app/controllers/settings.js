import Ember from 'ember';

export default Ember.Controller.extend({
  // the initial value of the `search` property
  /*
  email: appStrap.email,
  username: appStrap.username,
  firstName: appStrap.firstName,
  lastName: appStrap.lastName,
  */



  actions: {
  },
  settingsUpdated: function() {
          Ember.run.debounce(this, this.saveThis, 500, true);
  }.observes("model.firstName", "model.lastName", "model.username", "model.email"),
  saveThis: function() {
      this.model.save();
  }
});
