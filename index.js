(function() {
    'use strict';


angular.module('weatherApp', [])

angular.module('weatherApp').controller("weatherController", weatherController);

weatherController.$inject = ['$http'];

function weatherController($http) {
    var vm = this;
    vm.city = '';
    vm.searchHistory = [];
    vm.apiKey = "2060249525974b403bdcf764400eead2";


    vm.APIcall = function(city) {
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial&appid=' + vm.apiKey)
            .then(function(response) {
              vm.Info = response.data;

              vm.searchHistory.push({
                          name: response.data.name,
                          timestamp: new Date()
                        })
            });
    };
}
})();
