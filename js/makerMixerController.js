makerMixer.controller('MakerMixerController', ['$http', function($http) {
  var self = this;
  self.list = [];

  self.importList = function() {
    $http.get('http://localhost:3000/makers').success(function() {
    }).then(function(response) {
      self.list = response.data;
    }) 
  }
}]);
