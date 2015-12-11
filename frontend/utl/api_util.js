var require = require('../actions/api_actions')

ApiUtil = {
  fetchBenches: function() {
    $.get('api/benches', {}, function(benches){
      benchActions.receiveAll(benches);
    });
  }
}

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
