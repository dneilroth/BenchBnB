var ApiActions = require('../actions/api_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
          url: 'api/benches',
          data: {bounds: bounds},
          success: function(benches){
            ApiActions.receiveAll(benches);
          }
        });
      },

    creatBench: function(newBench) {
      $.ajax({
        method: "POST",
        data: {bench: newBench},
        success: function(bench) {
          ApiActions.addBench(bench);
        }
      });
    }
    };

module.exports = ApiUtil;
