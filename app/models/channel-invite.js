import DS from 'ember-data';

export default DS.Model.extend({
    channel_id: DS.belongsTo('channel', {async: true}),
    inviter: DS.attr('String'),
    invitedEmail: DS.attr('String'),
    invited: DS.belongsTo('user', {async: true})
});
