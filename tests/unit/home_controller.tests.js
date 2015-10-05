describe('MathController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('MathController', {'$scope': scope});
  }));

  describe('do some math', function() {
    it('checks for results of math equations', function() {

        expect(scope.multiplyThese()).toEqual(6);
        expect(scope.addThese()).toEqual(6);
        expect(scope.subtractTwo()).toEqual(2);
    });
  });
});

describe('StringController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('StringController', {'$scope': scope});
  }));

  describe('compare some strings', function() {
    it('it compares strings', function() {
          expect(scope.showOne()).toBe("Tara");
          expect(scope.combineThree()).toBe("Tara loves to code");
    });
  });
});

describe('BooleanController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('BooleanController', {'$scope': scope});
  }));

  describe('check for truth and falseness', function() {
    it('it checks boolean values', function() {
      expect(scope.showTrue()).toBe(true);
      expect(scope.showFalse()).toBe(false);
    });
  });
});

