/** @jsx React.DOM */
var Views = Views || {};
Views.Photo = React.createClass({
  getInitialState: function() {
    return { item: {} };
  },
  setItem: function() {
    this.setState({ item: this.props.model });
  },
  componentWillMount: function() {
    var model = this.props.model;

    model.on('loaded', this.setItem);
  },
  componentDidMount: function() {
    this.props.model.load();
  },
  componentWillReceiveProps: function(nextProps) {
    var model = nextProps.model;

    model.on('loaded', this.setItem);
    model.load();
  },
  render: function() {
    var EL = Views.EntryList;
    var output;
    var date = new Date(this.props.model.created_at * 1000);
    if (this.state.item.id) {
      var entryList = new Models.EntryList(this.state.item.created_at);
      output = (
        <div className="photo">
          <EL key={this.state.item.id} modelList={entryList} />
        </div>
      );
    }
    return (
        <div className="date">{date.toLocaleString()}
         {output}
        </div>
    );
  }
});
