import Ember from 'ember';

export default Ember.Component.extend({
  audio: Ember.inject.service(),

  amplitudePercent: function() {
    return this.get('audio.amplitude') * 100;
  }.property('audio.amplitude'),

  style: function() {
    var style = "width: " + this.get('amplitudePercent') + "%";
    return new Ember.Handlebars.SafeString(style);
  }.property('amplitudePercent')

});
