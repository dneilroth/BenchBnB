var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var markers = [];
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
          var mapCorners = {
            northEast: {
              lat: bounds.getNorthEast().lat(),
              lng: bounds.getNorthEast().lng()
            },
            southWest: {
              lat: bounds.getSouthWest().lat(),
              lng: bounds.getSouthWest().lng()
            }
          };
          ApiUtil.fetchBenches(mapCorners);
        });
      },

    markerInBenchStoreNotOnMap: function(bench) {
      for (var i = 0; i < markers.length; i++) {
        var markerLat = markers[i].position.lat();
        var markerlng = markers[i].position.lng();
        if (bench.lat === markerLat && bench.lng === markerlng) {
          return false;
        }
      }
      return true;
    },

    resetMarkers: function() {
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];
      var that = this;
        BenchStore.all().forEach(function(bench){
              var pos = new google.maps.LatLng(bench.lat, bench.lng);
              var newMarker = new google.maps.Marker({
                position: pos,
                map: that.map,
                title: bench.description
            });
        // if (markers.indexOf(newMarker) === -1) {
          markers.push(newMarker);
        // }
      });
    },


  render: function() {
    return(
      <div id="map" ref="map"></div>
    );
  }
});

module.exports = Map;
