/** @jsx React.DOM */
var Views = Views || {};
Views.TimeSelector = React.createClass({
  getInitialState: function() {
    return { time: 'latest' };
  },
  onChange: function(e) {
    this.setState({ time: e.target.value });
    this.props.handler(e.target.value);
  },
  render: function() {
    return (
      <input onChange={this.onChange} value={this.state.time} />
    );
  }
});
