var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "BENCHES_RECEIVED":
      BenchStore.resetBenches(payload.benches);
      break;
    case "BENCH_ADDED":
      BenchStore.addBench(payload.bench);
      break;
  }
};

BenchStore.addBench = function(bench) {
  _benches.push(bench);
  this.__emitChange();
};

BenchStore.resetBenches = function(benches) {
  _benches = benches;
  this.__emitChange();
};

BenchStore.all = function() {
  return _benches.slice();
};

module.exports = BenchStore;
