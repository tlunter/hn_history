/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    var ml = this.props.modelList.items;
    if (ml.length > 0 && this.state.current === undefined) {
      var current = ml[ml.length-1].created_at;
      this.props.handler(current);
      this.setState({current: current});
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
  current: function () {
    for (i = 0; i < this.state.items.length; i++) {
      if (this.state.current === this.state.items[i].created_at) {
        return this.state.items[i];
      }
    }
  },
  currentIndex: function () {
    for (i = 0; i < this.state.items.length; i++) {
      if (this.state.current === this.state.items[i].created_at) {
        return i;
      }
    }
  },
  previous: function(e) {
    var newCurrent = this.state.items[this.currentIndex() - 1];
    if (newCurrent) {
      this.setState({current: newCurrent.created_at});
      this.props.handler(newCurrent.created_at);
    }
  },
  next: function(e) {
    var newCurrent = this.state.items[this.currentIndex() + 1];
    if (newCurrent) {
      this.setState({current: newCurrent.created_at});
      this.props.handler(newCurrent.created_at);
    }
  },
  render: function() {
    var P = Views.Photo;
    var photo = <P created_at={this.state.current} />;
    return (
      <div className="photo-list pure-g">
        <div className="left pure-u-1-5"><button onClick={this.previous}>Previous</button></div>
        <div className="photo pure-u-3-5">{photo}</div>
        <div className="right pure-u-1-5"><button onClick={this.next}>Next</button></div>
      </div>
    );
  }
});

