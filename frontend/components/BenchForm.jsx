var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    var lat = this.props.location.query.lat;
    var lng = this.props.location.query.lng;
    return {lat: lat, lng: lng, seating: "", description: ""};
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
          valueLink={this.linkState('lat')}/>

        <label>longitude: </label>
        <input type="integer"
          valueLink={this.linkState('lng')}/>

        <label>seating: </label>
        <input type="integer"
          valueLink={this.linkState('seating')} />

        <label>description: </label>
        <input type="text"
        valueLink={this.linkState('description')}/>

        <input type="submit" value="add new bench!" />
      </form>
    );
  }
});

module.exports = BenchForm;
