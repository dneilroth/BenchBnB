var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  componentDidMount: function(){
      var map = ReactDOM.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      BenchStore.addListener(this.resetMarkers);
      this.listenForMove();
    },

    listenForMove: function(){
        //we listen for the map to emit an 'idle' event, it does this when
        //the map stops moving
        var that = this;
        google.maps.event.addListener(this.map, 'idle', function() {
          var bounds = that.map.getBounds();
          debugger
          // var mapCorners = {
          //   northEast: {
          //     northEastLat: bounds.getNorthEast().lat();
          //     northEastLng: bounds.getNorthEast().lng();
          //   },
          //   southWest: {
          //     southWestLat: bounds.getSouthWest().lat();
          //     southWestLng: bounds.getSouthWest().lng();
          //   }
          // };
          // console.log(mapCorners);
          ApiUtil.fetchBenches();
        });
      },

    resetMarkers: function() {
      var that = this;
        BenchStore.all().forEach(function(bench){
            var pos = new google.maps.LatLng(bench.lat, bench.lng);
          new google.maps.Marker({
            position: pos,
            map: that.map,
            title: bench.description
        });
      });
    },


  render: function() {
    return(
      <div id="map" ref="map"></div>
    );
  }
});

module.exports = Map;
