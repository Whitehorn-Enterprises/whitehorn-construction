// INITILIZE CONTROLLER
// ============================================================
angular.module("wc-app").controller("headerAndNavCtrl", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.dirTest = "hey"
  // FUNCTIONS
  // ============================================================
  $scope.logger = function () {
    console.log("yup");
  }
  $scope.logger()
});
