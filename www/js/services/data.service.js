(function () {
  angular.module("starter").factory("DataService", function () {
    // Might use a resource here that returns a JSON array


    var number = 3;
    return {
      number: number
    };
  });
})();
