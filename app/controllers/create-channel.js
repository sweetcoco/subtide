import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        this.user = this.store.find('user', appStrap.id);
    },
  actions: {
      createChannel: function() {
          var channel = this.store.createRecord('channel', {
              channelName: this.channelName // the backend will supply the channelCreator and channelMembers field values based on session credentials.
          });
          channel.save();
          this.send('default');
      }
  }
});
