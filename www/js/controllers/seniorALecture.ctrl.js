angular.module("starter").controller("seniorALectureController", seniorALectureController);

seniorALectureController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function seniorALectureController($scope, $state, DataService) {
  if (localStorage.getItem("lectureSummary2") != null) {
    $scope.textshow = localStorage.getItem("lectureSummary2");
  }
  console.log(localStorage.getItem("lectureTitle2"));
  $scope.lectureSelect = localStorage.getItem("lectureTitle2");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    localStorage.setItem("lectureTitle2", lectureSelect);

    localStorage.setItem("lectureSummary2", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary2");
    $state.go('home');

  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary2");
    localStorage.removeItem("lectureTitle2");

  }



  // console.log(localStorage.getItem("lectureSummary"));
}
