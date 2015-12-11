var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "BENCHES_RECEIVED":
      var result = BenchStore.resetBenches(payload.benches)
      break;
  }
};

BenchStore.resetBenches = function(benches) {
  _benches = benches;
  this.__emitChange();
};

BenchStore.all = function() {
  return _benches.slice();
};

module.exports = BenchStore;
