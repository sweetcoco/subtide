import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        this.channel_id = this.model.get('id');
    },
  actions: {
      addMember: function() {
          var newMember = this.store.createRecord('channelInvite', {
              channel_id: this.model,
              invitedEmail: this.invitedEmail // the backend will supply the inviter and channelMembers field values based on session credentials.
          });
          newMember.save();
          this.send('default');
      }
  }
});
