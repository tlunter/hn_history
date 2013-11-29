/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    var ml = this.props.modelList.items;
    if (ml.length > 0 && this.state.current === undefined) {
      var current = ml[ml.length-1].created_at;
      this.props.handler(ml[ml.length-1].created_at);
      this.setState({
        index: ml.length-1,
        current: current
      });
    }

    this.setState({
      items: ml
    });
  },
  getInitialState: function() {
    return {
      items: []
    };
  },
  componentDidMount: function() {
    this.loadModelList(this.props);
    document.addEventListener('keypress', this.onKeyPress);
  },
  componentWillReceiveProps: function(nextProps) {
    this.loadModelList(nextProps);
  },
  loadModelList: function(props) {
    var modelList = props.modelList;

    modelList.on('loaded', this.setItems);
    modelList.load();
  },
  onKeyPress: function(e) {
    if (e.keyCode == 104) {
      this.previous();
    } else if (e.keyCode == 108) {
      this.next();
    }
  },
  previous: function(e) {
    var index = Math.max(this.state.index - 1, 0);
    if (this.state.moveable && this.state.index != index) {
      this.setState({
        current: this.state.items[index].created_at,
        index: index
      });
      this.props.handler(this.state.items[index].created_at);
    }
  },
  next: function(e) {
    var index = Math.min(this.state.index + 1, this.state.items.length - 1);
    if (this.state.moveable && this.state.index != index) {
      this.setState({
        current: this.state.items[index].created_at,
        index: index
      });
      this.props.handler(this.state.items[index].created_at);
    }
  },
  render: function() {
    var P = Views.Photo;
    var photo = <P model={this.state.items[this.state.index]} />;
    return (
      <div className="photo_list">
        <div><button onClick={this.previous}>Previous</button></div>
        {photo}
        <div><button onClick={this.next}>Next</button></div>
      </div>
    );
  }
});

