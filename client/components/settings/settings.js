require('./settings.less');
var template = require('./settings.html');

angular.module('settings', [])
.component('settings', {
  template: template,
  controller: function() {}
});
