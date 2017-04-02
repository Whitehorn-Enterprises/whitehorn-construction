// INITILIZE CONTROLLER
// ============================================================
angular.module("wc-app").controller("landingCtrl", function($scope, landingService) {
  // VARIABLES
  // ============================================================
  $scope.test = "";
  // FUNCTIONS
  // ============================================================

  $scope.getTest = function () {
    landingService.test().then(function(response) {
      $scope.test = response.test_text;
    });
  }
  $scope.getTest()

});
