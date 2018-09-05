angular.module("starter").controller("juniorBLectureController", juniorBLectureController);

juniorBLectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function juniorBLectureController($scope, $state, DataService) {
  if (localStorage.getItem("lectureSummary4") != null) {
    $scope.textshow = localStorage.getItem("lectureSummary4");
  }
  console.log(localStorage.getItem("lectureTitle4"));
  $scope.lectureSelect = localStorage.getItem("lectureTitle4");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    localStorage.setItem("lectureTitle4", lectureSelect);

    localStorage.setItem("lectureSummary4", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary4");
    $state.go('home');

  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary4");
    localStorage.removeItem("lectureTitle4");

  }
}
