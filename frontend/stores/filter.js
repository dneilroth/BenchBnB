var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _filters = {};
var FilterStore = new Store(AppDispatcher);

FilterStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case 'BOUNDS_RECEIVED':
      FilterStore.setBounds(payload.bounds);
      break;
    case 'MIN_SEAT_RECEIVED':
      FilterStore.setMinSeat(payload.minSeat);
      break;
    case 'MAX_SEAT_RECEIVED':
      FilterStore.setMaxSeat(payload.maxSeat);
      break;
  }
};

FilterStore.resetFilters = function(filters) {
  _filters = filters;
  this.__emitChange();
};

FilterStore.all = function() {
  return _filters;
};

FilterStore.setBounds = function(bounds) {
  _filters[bounds] = bounds;
  this.__emitChange();
};

FilterStore.setMinSeat = function(minSeat) {
  _filters[minSeat] = minSeat;
  this.__emitChange();
};

FilterStore.setMaxSeat = function(maxSeat) {
  _filters[maxSeat] = maxSeat;
  this.__emitChange();
};


module.exports = FilterStore;
