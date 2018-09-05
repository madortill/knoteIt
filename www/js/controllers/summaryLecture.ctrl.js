angular.module("starter").controller("summaryLectureController", summaryLectureController);

summaryLectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function summaryLectureController($scope, $state, DataService) {

  // var currentText;
  if (localStorage.getItem("lectureSummary1") != null) {
    $scope.textshow = localStorage.getItem("lectureSummary1");
  }
  // console.log(localStorage.getItem("lectureTitle"));
  // $scope.lectureSelect = localStorage.getItem("lectureTitle");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    // localStorage.setItem("lectureTitle", lectureSelect);

    localStorage.setItem("lectureSummary1", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary1");
    $state.go('home');

  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary1");
    // localStorage.removeItem("lectureTitle");

  }
}
