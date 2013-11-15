/** @jsx React.DOM */
var Views = Views || {};
Views.EntryList = React.createClass({
  setItems: function () {
    this.setState({ items: this.props.modelList.items });
  },
  getInitialState: function() {
    return { items:[] };
  },
  componentWillMount: function() {
    var modelList = this.props.modelList;

    modelList.on('loaded', this.setItems);
  },
  componentDidMount: function() {
    this.props.modelList.load();
  },
  componentWillReceiveProps: function(nextProps) {
    var modelList = nextProps.modelList;

    modelList.on('loaded', this.setItems);
    modelList.load();
  },
  render: function() {
    var E = Views.Entry;
    var entryNodes = this.state.items.map(function (entry) {
      return <E entry={entry} />;
    });
    return (
      <div>{entryNodes}</div>
    );
  }
});
