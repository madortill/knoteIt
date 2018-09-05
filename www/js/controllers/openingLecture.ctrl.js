angular.module("starter").controller("openingLectureController", openingLectureController);

openingLectureController.$inject = ["$scope", "$state", "DataService", "$ionicPlatform"];

// $scope.menu = true;

function openingLectureController($scope, $state, DataService, $ionicPlatform) {
  //   console.log("fgfg");
  // $scope.text;
  // $ionicPlatform.onHardwareBackButton(function () {
  //   event.preventDefault();
  //   event.stopPropagation();
  alert('going back now yall');
  // $scope.saveTextLocal(text, lectureSelect);
  // alert('going back now y');
  // localStorage.setItem("lectureSummary", currentText);

  // $scope.textshow = localStorage.getItem("lectureSummary");
  // });
  // var currentText;
  if (localStorage.getItem("lectureSummary") != null) {
    $scope.textshow = localStorage.getItem("lectureSummary");
  }
  // console.log(localStorage.getItem("lectureTitle"));
  // $scope.lectureSelect = localStorage.getItem("lectureTitle");

  $scope.saveTextLocal = function (text, lectureSelect) {
    currentText = text;
    console.log(lectureSelect);
    // localStorage.setItem("lectureTitle", lectureSelect);

    localStorage.setItem("lectureSummary", currentText);

    $scope.textshow = localStorage.getItem("lectureSummary");
    $state.go('home');
  }
  $scope.delete = function () {
    localStorage.removeItem("lectureSummary");
    // localStorage.removeItem("lectureTitle");

  }

  // console.log(localStorage.getItem("lectureSummary"));
}
