/** @jsx React.DOM */
var Views = Views || {};
Views.Photo = React.createClass({
  getInitialState: function() {
    return { item: {}, selected: false };
  },
  setItem: function() {
    this.setState({ item: this.props.model });
  },
  render: function() {
    if (this.props.model !== undefined) {
      var date = new Date(this.props.model.created_at * 1000);
      return (<div>{date.toLocaleString()}</div>);
    }
    return (<div />);
  }
});
