"use strict";

module.exports = {
  "return": function _return(value) {
    return value;
  },
  bind: function bind(value, f) {
    if (value == null) {
      return null;
    }return f(value);
  }
};