import assert from 'assert';
import mayBe from './';

describe('mayBe Monad test suite', () => { 
    it('should pass the monad law 1', () => {
      var fn = (a) => mayBe.return(a * 3);
      var lhs = mayBe.bind(mayBe.return(5), fn);
      var rhs = fn(5);
      assert.equal(lhs,rhs);
    });

    it('should pass the monad law 2', () => {
      var m = mayBe.return(5);
      var lhs = mayBe.bind(m, mayBe.return);
      assert.equal(m,lhs);
    });

    it('should pass the monad law 3', () => {
      var f = (a) => mayBe.return(a * 3);
      var g = (a) => mayBe.return(a * 5);
      var m = mayBe.return(7);
      var lhs = mayBe.bind(mayBe.bind(m, f), g);
      var rhs = mayBe.bind(m, (x) => mayBe.bind(f(x), g));
      assert.equal(lhs,rhs);
    });
});
