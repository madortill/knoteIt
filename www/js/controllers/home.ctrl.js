angular.module("starter").controller("HomeController", HomeController);

HomeController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function HomeController($scope, $state, DataService) {
  //   console.log("fgfg");
  $scope.text;
  var currentText;
  $scope.textshow = localStorage.getItem("thetext");
  $scope.saveTextLocal = function (text) {
    currentText = text;
    console.log($scope.text);
    localStorage.setItem("thetext", currentText);

    $scope.textshow = localStorage.getItem("thetext");
  }
  $scope.delete = function () {
    localStorage.removeItem("thetext");

  }

  console.log(localStorage.getItem("thetext"));
}
