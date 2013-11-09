/** @jsx React.DOM */
Views.EntryList = React.createClass({
  modelList: function () {
    if (this._modelList) return this._modelList;

    if (this.props && this.props.photo && this.props.photo.id) {
      this._modelList = new Models.EntryList(this.props.photo.id);
      return this._modelList;
    }
  },
  loadEntries: function () {
    if (this.modelList()) {
      this.modelList().on('loaded', this.setItems);
      this.modelList().load();
    }
  },
  setItems: function () {
    this.setState({ items: this.modelList().items });
  },
  getInitialState: function() {
    return { items:[] };
  },
  componentWillMount: function() {
    this.loadEntries();
  },
  render: function() {
    var E = Views.Entry;
    var entryNodes = this.state.items.map(function (entry) {
      return <E data={entry} />;
    });
    return (
      <div>{entryNodes}</div>
    );
  }
});
