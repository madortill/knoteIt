angular.module("starter").controller("seniorBLectureController", seniorBLectureController);

seniorBLectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function seniorBLectureController($scope, $state, DataService) {

  if (localStorage.getItem("lectureSummary3") != null && localStorage.getItem("lectureSummary3") != undefined) {
    $scope.textshow = localStorage.getItem("lectureSummary3");
  }
  console.log(localStorage.getItem("lectureTitle3"));
  $scope.lectureSelect = localStorage.getItem("lectureTitle3");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    localStorage.setItem("lectureTitle3", lectureSelect);

    localStorage.setItem("lectureSummary3", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary3");
    $state.go('home');

  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary3");
    localStorage.removeItem("lectureTitle3");

  }


  // console.log(localStorage.getItem("lectureSummary"));
}
