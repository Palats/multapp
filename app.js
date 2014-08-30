mult = {};

mult.MainCtrl = function($scope) {
  this.result = '';
  this.resultPattern = /10/;
  this.leftValue = 3;
  this.rightValue = 7;
  this.opSymbol = '+';
};

mult.module = angular.module('mult.app', []);
mult.module.controller('MainCtrl', mult.MainCtrl);
