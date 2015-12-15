var ApiActions = require('../actions/api_actions');
var FilterStore = require('../stores/filter');

var ApiUtil = {
  fetchBenches: function(filters) {
      $.ajax({
          url: 'api/benches',
          data: {filters: filters},
          success: function(benches){
            ApiActions.receiveAll(benches);
          }
        });
      },

    createBench: function(newBench) {
      $.ajax({
        method: "POST",
        url: 'api/benches',
        data: {bench: newBench},
        success: function(bench) {
          ApiActions.addBench(bench);
        }
      });
    },

    fetchFilteredBenches: function(filters) {
      console.log(filters);
      $.ajax({
        url: 'api/benches',
        data: {filters: filters},
        success: function(benches) {
          ApiActions.receiveAll(benches);
        }
      });
    }
    };

module.exports = ApiUtil;
