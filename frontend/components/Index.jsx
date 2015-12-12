var React = require('react');
var BenchStore = require('../stores/bench');

var Index = React.createClass({
  getInitialState: function() {
    return({benches: BenchStore.all()});
  },

  componentDidMount: function() {
    BenchStore.addListener(this.updateBenches);
  },

  updateBenches: function() {
    this.setState({benches: BenchStore.all()});
  },

  render: function(){
    var benches = this.state.benches.map(function(bench, idx){
      return <li key={idx}>{bench.description}</li>;
    });
    return(
      <div>{benches}</div>
    );
  }
});

module.exports = Index;
