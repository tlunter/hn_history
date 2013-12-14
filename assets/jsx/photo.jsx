/** @jsx React.DOM */
var Views = Views || {};
Views.Photo = React.createClass({
  render: function() {
    var date = new Date(this.props.created_at * 1000);
    return (<div>{date.toLocaleString()}</div>);
  }
});
