mult = {};

mult.MainCtrl = function($scope) {
  this.foo = 'plop';
};

mult.module = angular.module('mult.app', []);
mult.module.controller('MainCtrl', mult.MainCtrl);
