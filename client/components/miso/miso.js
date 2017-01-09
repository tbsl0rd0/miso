require('./miso.less');
var template = require('./miso.html');

angular.module('miso', [
  'modal',
  'navbar',
  'notify',
  'settings'
])
.component('miso', {
  template: template,
  controller: function(modal, notify, $scope) {
    $scope.show_modal = function() {
      modal.show_modal();
    }

    $scope.notify = function() {
      notify.put_notify('미소');
    }
  }
});
