import assert from 'assert';
import {return as returns} from './';
import {bind} from './';

describe('mayBe Monad test suite', () => { 
    it('should pass the monad law 1', () => {
      var fn = (a) => returns(a * 3);
      var lhs = bind(returns(5), fn);
      var rhs = fn(5);
      assert.equal(lhs,rhs);
    });

    it('should pass the monad law 2', () => {
      var m = returns(5);
      var lhs = bind(m, returns);
      assert.equal(m,lhs);
    });

    it('should pass the monad law 3', () => {
      var f = (a) => returns(a * 3);
      var g = (a) => returns(a * 5);
      var m = returns(7);
      var lhs = bind(bind(m, f), g);
      var rhs = bind(m, (x) => bind(f(x), g));
      assert.equal(lhs,rhs);
    });
});
