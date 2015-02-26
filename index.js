"use strict";

var identity = function (val) {
    return val;
};

exports["return"] = identity;


var bind = function (value, f) {
    if (value == null) return null;
    return f(value);
};

exports.bind = bind;
Object.defineProperty(exports, "__esModule", {
    value: true
});