require('./navbar.less');
var template = require('./navbar.html');

angular.module('navbar', [])
.component('navbar', {
  template: template,
  controller: function() {}
});
