require('./notify.less');
var template = require('./notify.html');

angular.module('notify', [])
.component('notify', {
  template: template,
  controller: function(notify, $scope) {
    $scope.notifies = [];

    notify.put_notify = function(message) {
      if ($scope.notifies.length > 4) {
        return;
      }

      $scope.notifies.unshift(message);

      setTimeout(function() {
        if ($scope.notifies.length == 0) {
          return;
        }

        $scope.notifies.pop();

        $scope.$apply();
      }, 4000);
    };
  }
})
.factory('notify', function() {
  return {};
});
