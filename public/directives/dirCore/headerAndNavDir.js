// INITILIZE DIRECTIVE
// ============================================================
angular.module("wc-app").directive('headerAndNavDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './directives/dirHtml/headerAndNavTmpl.html',
    controller: 'headerAndNavCtrl'
  };
});
