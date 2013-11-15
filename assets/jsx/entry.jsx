/** @jsx React.DOM */
var Views = Views || {};
Views.Entry = React.createClass({
  render: function() {
    return <div key={this.props.entry.id}>{this.props.entry.title}</div>;
  }
});
