import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('String'),
    lastName: DS.attr('String'),
    username: DS.attr('String'),
    email: DS.attr('String'),
    channels: DS.hasMany('channel', {async: true}),
    channelInvites: DS.hasMany('channel-invite', {async: true}),
});
