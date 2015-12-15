var React = require('react');
var Index = require('./Index');
var Map = require('./Map');
var ReactDOM = require('react-dom');
var FilterStore = require('../stores/filter');
var ApiUtil = require('../util/api_util');
var SeatFilter = require('./seat_filter');
var FilterActions = require('../actions/filter_actions');

var Search = React.createClass({

  getInitialState: function() {
    return ({minSeat: FilterStore.all()['minSeat'],
            maxSeat: 100,
            bounds: ""});
  },

  componentDidMount: function() {
    this.token = FilterStore.addListener(this.resetBenches);
  },

  setMinSeat: function(min) {
    console.log(min);
    this.setState({minSeat: FilterStore.all()['minSeat']});
    FilterActions.receiveMinSeat(min);
  },

  setMaxSeat: function(max) {
    this.setState({maxSeat: FilterStore.all()['maxSeat']});
    FilterActions.receiveMaxSeat(max);
  },

  setBounds: function(bounds) {
    this.setState({bounds: bounds});
    FilterActions.receiveBounds(bounds);
  },

  // componentWillUnmount: function() {
  //   FilterStore.remove(this.token);
  // },

  // resetFilters: function() {
  //   // var bounds = this.filters.
  //   // ApiUtil.fetchBenches();
  //   this.setState({filters: FilterStore.all()});
  // },
    resetBenches: function() {
      ApiUtil.fetchFilteredBenches(this.state);
    },

  clickMapHandler: function(coords) {
    var history = this.props.history;
    var query = this.props.location.query;
    history.pushState(this.state, "benches/new", coords);
  },

  render: function() {
    return(
      <div>
        <Map clickMapHandler={this.clickMapHandler}
          location={this.props.location} setBounds={this.setBounds}/>
        <Index />
        <SeatFilter setMinSeat={this.setMinSeat}
            setMaxSeat={this.setMaxSeat} />
      </div>
    );
  }
});

module.exports = Search;
