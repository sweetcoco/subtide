//import Ember from 'ember';
import { Controller } from 'ember-pusher/controller';
import { Bindings } from 'ember-pusher/bindings';

export default Controller.extend(Bindings, {
    init: function() {
        var userChannel = 'userChannel_' + appStrap.id;
        console.log(userChannel);
        this.PUSHER_SUBSCRIPTIONS[userChannel] = ['channel_add'];
        this._super();
    },
    PUSHER_SUBSCRIPTIONS: {
        testChannel: ['my_event']
    },
    actions: {
        channelAdd: function() {
            console.log("You've been added to a group!");
        },
        myEvent: function() {
            console.log("myEvent is working!");
        },
    }
});
