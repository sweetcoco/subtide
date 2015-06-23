import DS from 'ember-data';

export default DS.Model.extend({
    channelName: DS.attr('String'),
    channelCreator: DS.attr('String'),
    channelMembers: DS.hasMany('user', {async: true}),
    userInvites: DS.hasMany('channel-invite')
});
