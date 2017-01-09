require('./modal.less');
var template = require('./modal.html');

angular.module('modal', [])
.component('modal', {
  template: template,
  controller: function(modal, $scope) {
    modal.show_modal = function() {
      $scope.active = true;
    };

    modal.hide_modal = function() {
      $scope.active = false;
    };

    $scope.cancel = function() {
      $scope.active = false;
    };

    $scope.confirm = function() {
      $scope.active = false;
    };
  }
})
.factory('modal', function() {
  return {};
});
