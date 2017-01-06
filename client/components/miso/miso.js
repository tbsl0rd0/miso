require('./miso.less');
var template = require('./miso.html');

angular.module('miso', [
  'navbar',
  'settings'
])
.component('miso', {
  template: template,
  controller: function() {}
});
