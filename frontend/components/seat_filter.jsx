var React = require('react');
var FilterActions = require('../actions/filter_actions');

var SeatFilter = React.createClass({

  getInitialState: function() {
    return({minSeat: 0, maxSeat: 100});
  },

  handleMinChange: function(e) {
    this.props.setMinSeat(e.target.value);
  },

  handleMaxChange: function(e) {
    this.props.setMaxSeat(e.target.value);
  },

  render: function() {
    return(
      <div>
        <label>min seats</label>
        <input type="integer" onChange={this.handleMinChange}/>
        <label>max seats</label>
        <input type="integer" onChange={this.handleMaxChange} />
      </div>
    );
  }
});

module.exports = SeatFilter;
