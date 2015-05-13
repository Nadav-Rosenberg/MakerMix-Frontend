describe('MakerMixerController', function() {
  beforeEach(module('MakerMixer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MakerMixerController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.list).toBeUndefined();
  });

});