var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Search = require('./components/Search');
var BenchForm = require('./components/BenchForm');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="benches/new" component={BenchForm} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);

});
