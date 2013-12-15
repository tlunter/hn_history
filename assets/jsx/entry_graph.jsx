/** @jsx React.DOM */
var Views = Views || {};
Views.EntryGraph = React.createClass({
  setItems: function () {
    drawTimeline(this.props.modelList.items, "#timeline");
    this.setState({ title: this.props.modelList.items[0].title });
  },
  getInitialState: function() {
    return { title: "" };
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
    return (
      <div>
        <div className="center">
          <h1>{this.state.title}</h1>
          <a href="/">Front Page</a>
        </div>
        <div id="timeline">
        </div>
      </div>
    );
  }
});
