var React = require('react');
var FilterActions = require('../actions/filter_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var SeatFilter = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({minSeat: 0, maxSeat: 100});
  },

  handleMinChange: function(e) {
    this.setState({minSeat: e.target.value});
  },

  handleMaxChange: function(e) {
    this.setState({setMaxSeat: e.target.value});
  },

  handleSubmit: function(e){
      e.preventDefault();

      this.props.setMinSeat(this.state.minSeat);
      this.props.setMaxSeat(this.state.maxSeat);
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>min seats</label>
        <input type="integer" valueLink={this.linkState("minSeat")} />
        <label>max seats</label>
        <input type="integer" valueLink={this.linkState("maxSeat")} />
        <input type="submit" value="how many seats?!" />
      </form>
    );
  }
});

module.exports = SeatFilter;
