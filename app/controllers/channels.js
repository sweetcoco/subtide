import Ember from 'ember';

export default Ember.Controller.extend({
    isCreateChannel: false,

    actions: {
      createChannel: function() {
        this.set('isCreateChannel', true);
      },

      default: function() {
        this.set('isCreateChannel', false);
      }
    }
});
