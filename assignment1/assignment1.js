 (function () {
'use strict';
angular.module('Hunger', [])
.controller('HungerController', HungerController);

HungerController.$inject = ['$scope'];
function HungerController($scope) {
  $scope.list1 = [];
  $scope.input = "";
  $scope.message = "";
  $scope.checkHunger = function () {
    if($scope.input == ""){
      $scope.message = "Please enter data first.";

    }
    else {
      $scope.list1 = $scope.input.split(',');
      var counter=0
      for (var i = 0; i < $scope.list1.length; i++) {
        $scope.list1[i] = $scope.list1[i].trim();
        if($scope.list1[i]!=""){
          counter+=1
        }
      }
      if (counter<=3) {
        $scope.message = "Enjoy!"
      }
      else {
        $scope.message = "Too Much!"
      }
    }
  };
}
})();
