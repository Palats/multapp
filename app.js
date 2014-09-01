mult = {};

mult.MainCtrl = function($scope, $rootScope, $location) {
  this.mode = 'add';
  this.newValues();

  var self = this;
  $scope.$on("$locationChangeSuccess", function(ev, newPath, oldPath) {
    if (newPath != oldPath) {
      self.onLocationChange($location);
    }
  });
};

mult.MainCtrl.prototype.onLocationChange = function($location) {
  if ($location.path() == '/mul') {
    this.mode = 'mul';
  } else {
    this.mode = 'add';
  }
  // Regen new values to be sure to update expected results and symbol.
  this.newValues();
};

mult.MainCtrl.prototype.randomValue = function() {
  return Math.floor(Math.random() * 11); // 0 to 10, included
};

mult.MainCtrl.prototype.newValues = function() {
  this.result = '';
  this.leftValue = this.randomValue();
  this.rightValue = this.randomValue();

  if (this.mode == 'mul') {
    this.expected = this.leftValue * this.rightValue;
    this.opSymbol = 'x';
  } else {
    this.expected = this.leftValue + this.rightValue;
    this.opSymbol = '+';
  }
  this.resultPattern = new RegExp("^" + this.expected.toString() + "$");
  this.retry = false;
  this.resultChange();
};

mult.MainCtrl.prototype.submitResult = function() {
  if (!this.resultPattern.test(this.result) && !this.retry) {
    this.retry = true;
    return;
  }
  this.newValues();
};

mult.MainCtrl.prototype.resultChange = function() {
  if (this.result === '') {
    this.state = 'empty';
  } else if (this.result == this.expected.toString()) {
    this.state = 'valid';
  } else {
    this.state = 'invalid';
  }
};

mult.module = angular.module('mult.app', []);
mult.module.controller('MainCtrl', mult.MainCtrl);

