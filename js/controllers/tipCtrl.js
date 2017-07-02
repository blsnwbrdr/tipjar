app.controller('tipDataCtrl', function($scope, $http) {
  $http.get('http://brandonsco.de/lab/tipguide/data/countryTipData.json').then(function(response) {
    var countryName = [];
    for(var i = 0; i < response.data.length; i++) {
      countryName.push(response.data[i].country);
    }
    countryName.sort();
    $scope.countryTipData = countryName;
    $scope.userSelection = function(tipData) {
      document.getElementById('countryList').style.display = 'none';
      document.getElementById('countryTipData').style.display = 'block';
      for(var x = 0; x < response.data.length; x++) {
        if(tipData === response.data[x].country) {
          $scope.country = response.data[x].country;
          $scope.dining = response.data[x].dining;
          $scope.transportation = response.data[x].transportation;
          $scope.accommodation = response.data[x].accommodation;
          $scope.thankyou = response.data[x].thankyou;
          $scope.goodbye = response.data[x].goodbye;
        }
      }
    };
  });
});