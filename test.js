"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var mayBe = _interopRequire(require("./"));

describe("mayBe Monad test suite", function () {
  it("should pass the monad law 1", function () {
    var fn = function (a) {
      return mayBe["return"](a * 3);
    };
    var lhs = mayBe.bind(mayBe["return"](5), fn);
    var rhs = fn(5);
    assert.equal(lhs, rhs);
  });

  it("should pass the monad law 2", function () {
    var m = mayBe["return"](5);
    var lhs = mayBe.bind(m, mayBe["return"]);
    assert.equal(m, lhs);
  });

  it("should pass the monad law 3", function () {
    var f = function (a) {
      return mayBe["return"](a * 3);
    };
    var g = function (a) {
      return mayBe["return"](a * 5);
    };
    var m = mayBe["return"](7);
    var lhs = mayBe.bind(mayBe.bind(m, f), g);
    var rhs = mayBe.bind(m, function (x) {
      return mayBe.bind(f(x), g);
    });
    assert.equal(lhs, rhs);
  });
});