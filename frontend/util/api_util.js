var ApiActions = require('../actions/api_actions')

ApiUtil = {
  fetchBenches: function() {
    $.get('api/benches', {}, function(benches){
      ApiActions.receiveAll(benches);
    });
  }
}

module.exports = ApiUtil;
