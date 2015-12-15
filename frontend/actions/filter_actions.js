var AppDispatcher = require('../dispatcher/dispatcher');

var filterActions = {

  receiveBounds: function(bounds) {
    AppDispatcher.dispatch({
      actionType: "BOUNDS_RECEIVED",
      bounds: bounds
    });
  },

  receiveMinSeat: function(minSeat) {
    console.log(minSeat);
    AppDispatcher.dispatch({
      actionType: "MIN_SEAT_RECEIVED",
      minSeat: minSeat
    });
  },

  receiveMaxSeat: function(maxSeat) {
    AppDispatcher.dispatch({
      actionType: "MAX_SEAT_RECEIVED",
      maxSeat: maxSeat
    });
  }
};

module.exports = filterActions;
