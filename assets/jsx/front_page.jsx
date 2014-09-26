/** @jsx React.DOM */
var Views = Views || {};
Views.FrontPage = React.createClass({
  getInitialState: function() { return { items: [] } },
  setItems: function() {
    var items = this.props.modelList.items;
    if (this.props.time) {
      if (items.length != this.state.items.length) {
        this.setState({ items: items });
      }
    } else {
      if (items.length > 0) {
        var index = items.length - 1;
        if (this.state.time != items[index].created_at) {
          this.setState({ items: items, time: items[index].created_at });
        }
      }
    }
  },
  componentWillMount: function() {
    this.loadModelList(this.props);
    this.startLatestTime();
  },
  componentWillUnmount: function() {
    if (this.state.timer) {
      window.clearTimeout(this.state.timer);
    }
  },
  loadModelList: function(props) {
    var modelList = props.modelList;

    modelList.on('loaded', this.setItems);
    modelList.load();
  },
  startLatestTime: function() {
    this.setLatestTime();
  },
  setLatestTime: function() {
    this.props.modelList.load();
    this.setState({
      timer: setTimeout(this.setLatestTime, 3000)
    });
  },
  render: function() {
    var time = this.props.time || this.state.time;
    var auto_update = !this.props.time;

    if (time && time > 0) {
      var entryList = new Models.EntryList(time);
      return (
        <div>
          <Views.PhotoList times={this.state.items} time={time} auto_update={auto_update} />
          <Views.EntryList modelList={entryList} />
        </div>
      );
    }
    return <div />;
  }
});
