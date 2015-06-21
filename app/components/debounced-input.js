import Ember from 'ember';


export default Ember.TextField.extend({
    debounceWait: 500,
    fireAtStart: true,
    _elementValueDidChange: function() {
        Ember.run.debounce(this, this._setValue, this.debounceWait, this.fireAtStart);
    },
    _setValue: function() {
        this.set('value', this.$().val());
    }
});
