angular.module("starter").controller("HomeController", HomeController);

HomeController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function HomeController($scope, $state, DataService) {
  //   console.log("fgfg");
  console.log(localStorage.getItem("lectureTitle"));

}
