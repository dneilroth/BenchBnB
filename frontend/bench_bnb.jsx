var ReactDOM = require('react-dom');
var React = require('react');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Search = require('./components/Search');

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Search />, content);

});
