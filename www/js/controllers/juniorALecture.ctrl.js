angular.module("starter").controller("juniorALectureController", juniorALectureController);

juniorALectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function juniorALectureController($scope, $state, DataService) {
  if (localStorage.getItem("lectureSummary5") != null) {
    $scope.textshow = localStorage.getItem("lectureSummary5");
  }
  console.log(localStorage.getItem("lectureTitle5"));
  $scope.lectureSelect = localStorage.getItem("lectureTitle5");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    localStorage.setItem("lectureTitle5", lectureSelect);

    localStorage.setItem("lectureSummary5", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary5");
    $state.go('home');
  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary5");
    localStorage.removeItem("lectureTitle5");

  }
}
