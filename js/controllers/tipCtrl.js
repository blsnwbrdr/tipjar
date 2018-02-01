app.controller('tipDataCtrl', ['$scope', '$http', function($scope, $http) {
  // GET COUNTRY TIP DATA
  $http.get('data/countryTipData-min.json').then(function(response) {
    // WRITE COUNTRY LIST
    var countryName = [];
    console.log(response.data.length);
    for(var i = 0; i < response.data.length; i++) {
      countryName.push(response.data[i].country);
    }
    countryName.sort();
    $scope.countryTipData = countryName;
    // DISPLAY TIP DATA FOR COUNTRY SELECTION
    $scope.userSelection = function(country) {
      document.getElementById('listBtn').style.display = 'inline-block';
      document.getElementById('appStoreLogo').style.display = 'none';
      document.getElementById('countryList').style.display = 'none';
      document.getElementById('countryTipData').style.display = 'block';
      for(var x = 0; x < response.data.length; x++) {
        if(country === response.data[x].country) {
          $scope.country = response.data[x].country;
          $scope.dining = response.data[x].dining;
          $scope.transportation = response.data[x].transportation;
          $scope.accommodation = response.data[x].accommodation;
          $scope.thankyou = response.data[x].thankyou;
          $scope.goodbye = response.data[x].goodbye;
          $scope.currency = response.data[x].currency;
          // CURRENCY CONVERSION
          var currency = response.data[x].currency;
          $http.get('data/currencyData-min.json').then(function(response) {
            for(var i = 0; i < response.data.length; i++) {
              if(currency === response.data[i].currency) {
                $scope.conversion = Math.round(response.data[i].conversion * 100) / 100;
              }
            }
          })
        }
      }
    };
  });
}]);
