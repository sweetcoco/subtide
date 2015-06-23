import Ember from 'ember';
import { Controller } from 'ember-pusher/controller';
import { Bindings } from 'ember-pusher/bindings';

export default Controller.extend(Bindings, {
    PUSHER_SUBSCRIPTIONS: {
    testChannel: ['my_event'],
    //anotherone: ['event-three']
  },
  actions: {
    myEvent: function(){ console.log("eventOne is working!"); },
    eventTwo: function(){ console.log("eventTwo is working!"); },
    eventThree: function(){ console.log("eventThree is working!"); }
  }
});
