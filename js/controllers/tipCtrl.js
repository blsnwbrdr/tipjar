app.controller('tipDataCtrl', ['$scope', '$http', function($scope, $http) {
  // GET COUNTRY TIP DATA
  $http.get('data/countryTipData-min.json').then(function(response) {
    // WRITE COUNTRY LIST
    var countryName = [];
    for(var i = 0; i < response.data.length; i++) {
      countryName.push(response.data[i].country);
    }
    countryName.sort();
    $scope.countryTipData = countryName;
    // DISPLAY TIP DATA FOR COUNTRY SELECTION
    $scope.userSelection = function(country) {
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
                $scope.conversion = response.data[i].conversion;
              }
            }
          })
          // var srcCurrency = 'USD';
          // var destCurrency = response.data[x].currency;
          // var apiKey = 'c9912ecb5eb02559e15f08d6d3122f2c';
          // var url = 'http://apilayer.net/api/live?access_key=' + apiKey + '&currencies=' + srcCurrency + ',' + destCurrency + '&format=1';
          // $http.get(url).then(function(response) {
          //   var array = [];
          //   for(var key in response.data.quotes) {
          //     if(response.data.quotes.hasOwnProperty(key)) {
          //       array.push(key, response.data.quotes[key]);
          //     }
          //   }
          //   $scope.conversion = array[3];
          // })
          // $scope.currency = response.data[x].currency;
        }
      }
    };
  });
}]);
