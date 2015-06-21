import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:7777',
    namespace: 'api',
    coalesceFindRequests: true
});

export default ApplicationAdapter;
