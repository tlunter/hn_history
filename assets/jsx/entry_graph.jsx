/** @jsx React.DOM */
var Views = Views || {};
Views.EntryGraph = React.createClass({
  setItems: function () {
    drawTimeline(this.props.modelList.items, "#timeline");
    this.setState({
      title: this.props.modelList.items[0].title,
      entryId: this.props.modelList.items[0].entry_id,
      link: this.props.modelList.items[0].link
    });
    var timeline = document.querySelector("#timeline");
    timeline.scrollLeft = timeline.scrollWidth;
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
          <h1><a href={this.state.link}>{this.state.title}</a></h1>
        </div>
        <div className="center">
          <ul className="nav">
            <li>
              <a href={this.state.link}>Link</a>
            </li>
            <li>
              <a href="/">Front Page</a>
            </li>
            <li>
              <a href={"http://news.ycombinator.com/item?id=" + this.state.entryId}>
                Comments
              </a>
            </li>
          </ul>
        </div>
        <div id="timeline">
        </div>
      </div>
    );
  }
});
