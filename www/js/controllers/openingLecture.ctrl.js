angular.module("starter").controller("openingLectureController", openingLectureController);

openingLectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function openingLectureController($scope, $state, DataService) {
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
