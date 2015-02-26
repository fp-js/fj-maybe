"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var _ = require("./");

var returns = _["return"];
var bind = _.bind;


describe("mayBe Monad test suite", function () {
  it("should pass the monad law 1", function () {
    var fn = function (a) {
      return returns(a * 3);
    };
    var lhs = bind(returns(5), fn);
    var rhs = fn(5);
    assert.equal(lhs, rhs);
  });

  it("should pass the monad law 2", function () {
    var m = returns(5);
    var lhs = bind(m, returns);
    assert.equal(m, lhs);
  });

  it("should pass the monad law 3", function () {
    var f = function (a) {
      return returns(a * 3);
    };
    var g = function (a) {
      return returns(a * 5);
    };
    var m = returns(7);
    var lhs = bind(bind(m, f), g);
    var rhs = bind(m, function (x) {
      return bind(f(x), g);
    });
    assert.equal(lhs, rhs);
  });
});