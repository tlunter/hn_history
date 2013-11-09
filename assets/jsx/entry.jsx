/** @jsx React.DOM */
Views.Entry = React.createClass({
  render: function() {
    return <div>{this.props.data.title}</div>;
  }
});
