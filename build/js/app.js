(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Poop = exports.Poop = function () {
  function Poop(smelliness) {
    _classCallCheck(this, Poop);

    this.smelliness = smelliness;
  }

  _createClass(Poop, [{
    key: "setSmelliness",
    value: function setSmelliness() {
      this.smelliness = Math.random() * 1000;
    }
  }]);

  return Poop;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _scripts = require("./../js/scripts.js");

$(document).ready(function () {
  $(".shit").append("Fuck!");
});

$(document).ready(function () {
  alert("FUCK SHIT FUCK FUCK!");
  $("#poop").submit(function (event) {
    event.preventDefault();
    var poop = new _scripts.Poop(1);
    poop.setSmelliness();
    $(".something").empty();
    $(".something").append(poop.smelliness);
    alert(poop.smelliness);
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
