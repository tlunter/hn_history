/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    var ml = this.props.modelList.items;
    if (ml.length > 0 && this.state.current === undefined) {
      var current = ml[ml.length-1].created_at;
      this.props.handler(ml[ml.length-1].created_at);
      this.setState({index:ml.length-1, current: current});
    }

    this.setState({
      items: ml
    });
  },
  getInitialState: function() {
    return { items: [] };
  },
  componentDidMount: function() {
    this.loadModelList(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    this.loadModelList(nextProps);
  },
  loadModelList: function(props) {
    var modelList = props.modelList;

    modelList.on('loaded', this.setItems);
    modelList.load();
  },
  previous: function(e) {
    var index = Math.max(this.state.index - 1, 0);
    this.props.handler(this.state.items[index].created_at);
    this.setState({current:this.state.items[index].created_at, index:index});
  },
  next: function(e) {
    var index = Math.min(this.state.index + 1, this.state.items.length - 1);
    this.props.handler(this.state.items[index].created_at);
    this.setState({current:this.state.items[index].created_at, index:index});
  },
  render: function() {
    var P = Views.Photo;
    var photo;
    if (this.state.items && this.state.index && this.state.items[this.state.index]) {
      photo = <P model={this.state.items[this.state.index]} />;
    }
    return (
      <div>
        <input onClick={this.previous} value="Previous" type="button"/>
        {photo}
        <input onClick={this.next} value="Next" type="button" />
      </div>
    );
  }
});

