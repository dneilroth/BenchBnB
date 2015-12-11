var ReactDOM = require('react-dom');
var React = require('react');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/Index');

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Index />, content);

});
