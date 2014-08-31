mult = {};

mult.MainCtrl = function($scope) {
  this.newValues();
};

mult.MainCtrl.prototype.randomValue = function() {
  return Math.floor(Math.random() * 11); // 0 to 10, included
};

mult.MainCtrl.prototype.newValues = function() {
  this.result = '';
  this.leftValue = this.randomValue();
  this.rightValue = this.randomValue();
  this.expected = this.leftValue + this.rightValue;
  this.opSymbol = '+';
  this.resultPattern = new RegExp("^" + this.expected.toString() + "$");
  this.retry = false;
};

mult.MainCtrl.prototype.submitResult = function() {
  if (!this.resultPattern.test(this.result) && !this.retry) {
    this.retry = true;
    return;
  }
  this.newValues();
};

mult.module = angular.module('mult.app', []);
mult.module.controller('MainCtrl', mult.MainCtrl);
