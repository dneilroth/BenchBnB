var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ApiActions = {
  receiveAll: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  addBench: function(bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_ADDED,
      bench: bench
    });
  }
};

module.exports = ApiActions;
