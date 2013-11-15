/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    this.setState({ items: this.props.modelList.items });
  },
  getInitialState: function() {
    return { items: [] };
  },
  componentWillMount: function() {
    var modelList = this.props.modelList;

    modelList.on('loaded', this.setItems);
  },
  componentDidMount: function() {
    this.props.modelList.load();
  },
  render: function() {
    var P = Views.Photo;
    var photoNodes = this.state.items.map(function (photo) {
      return <P photo={photo} />;
    });
    return (
      <div>{photoNodes}</div>
    );
  }
});

