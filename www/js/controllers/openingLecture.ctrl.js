angular.module("starter").controller("openingLectureController", openingLectureController);

openingLectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function openingLectureController($scope, $state, DataService) {
  //   console.log("fgfg");
  $scope.text;
  // var currentText;
  if (localStorage.getItem("thetext") != null) {
    $scope.textshow = localStorage.getItem("thetext");
  }
  console.log(localStorage.getItem("lectureTitle"));
  $scope.lectureSelect = localStorage.getItem("lectureTitle");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    localStorage.setItem("lectureTitle", lectureSelect);

    localStorage.setItem("thetext", currentText);

    $scope.textshow = localStorage.getItem("thetext");
  }
  $scope.delete = function () {
    localStorage.removeItem("thetext");
    localStorage.removeItem("lectureTitle");

  }

  // console.log(localStorage.getItem("thetext"));
}
