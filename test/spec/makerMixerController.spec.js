describe('MakerMixerController', function() {
  beforeEach(module('MakerMixer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MakerMixerController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.list.length).toEqual(0);
  });

  describe('when importing a list of names', function() {
    
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "http://localhost:3000/makers")
        .respond(
        { items: list }
      );
   
    }));

    var list = [
      {"_id":"55546fa1153f690b4082df55","name":"Nadav","pair":true,"blacklist":false,"numberOfCommits":100,"__v":0,"updated_at":"2015-05-14T09:49:21.243Z"},
      {"_id":"55546fe7153f690b4082df56","name":"Kanishk","pair":true,"blacklist":false,"numberOfCommits":200,"__v":0,"updated_at":"2015-05-14T09:50:31.825Z"},
      {"_id":"55547018153f690b4082df57","name":"Maciej","pair":true,"blacklist":false,"numberOfCommits":3000,"__v":0,"updated_at":"2015-05-14T09:51:20.488Z"}
    ];

    it('when import, lenght of list equal number of makers in database', function() { 
      ctrl.importList();
      httpBackend.flush();
      expect(ctrl.list.items).toEqual(list);
    });
  });
});



