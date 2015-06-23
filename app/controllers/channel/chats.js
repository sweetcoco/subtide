import Ember from 'ember';

export default Ember.Controller.extend({
    isAddMember: false,

    actions: {
      addMember: function() {
        this.set('isAddMember', true);
      },

      default: function() {
        this.set('isAddMember', false);
      }
    }
});
//
