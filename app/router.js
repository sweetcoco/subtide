import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/'});

  this.route('channel', { path: '/channel/:channel_id' }, function() {
      this.route('index', { path: '/'});
  }); //

  this.route('my-channel', { path: '/my-channel'});


  this.route('settings', { path: '/settings'} );
  this.route('create-channel', { path: '/create-channel'} );

  //this.route('groups');
});

export default Router;
