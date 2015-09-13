import Ember from 'ember';

export default Ember.Service.extend({
  sounds: {},
  analyzer: null,
  amplitude: 0,

  init() {
    var self = this;

    window.setup = () => {
      this.set('analyzer', new p5.Amplitude());

      this.set('sounds.coin', loadSound('sounds/coin.wav' /* , [onload_callback], [progress_callback] */));
      this.set('sounds.golpe', loadSound('sounds/golpe.wav'));
    };

    window.draw = () => {
      this.set('amplitude', this.get('analyzer').getLevel());
    };

    new p5();
    noLoop();
  },

  play(sound, rate) {
    this.get(`sounds.${sound}`).play(0, rate);
  }
});
