var React = require('react');
var ApiUtil = require('../util/api_util');


var BenchForm = React.createClass({
  getInitialState: function() {
    return {latitude: "", longitude: "", seating: "", description: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();

    ApiUtil.createBench(this.state);
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>

        <label>latitude: </label>
        <input type="integer"
          value={this.state.latitude}
          onChange={this.handleLatitudeChange}/>

        <label>longitude: </label>
        <input type="integer"
          value={this.state.longitude}
          onChange={this.handleLongitudeChange}/>

        <label>seating: </label>
        <input type="integer"
          value={this.state.seating}
          onChange={this.handleSeatingChange} />

        <label>description: </label>
        <input type="text"
        value={this.state.description}
        onChange={this.handleDescriptionChange}/>

        <input type="submit" value="add new bench!" />
      </form>
    );
  }
});

module.exports = BenchForm;
