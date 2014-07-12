/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    var ml = this.props.modelList.items;
    if (ml.length > 0) {
      for (i = 0; i < ml.length; i++) {
        if (this.props.time == ml[i].created_at) {
          return this.setState({
            items: ml
          });
        }
      }

      console.log(ml[ml.length-1].created_at);
      Aviator.navigate('/time/' + ml[ml.length-1].created_at);
    }

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
  componentWillUnmount: function() {
    document.removeEventListener('keypress', this.onKeyPress);
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
  currentIndex: function () {
    for (i = 0; i < this.state.items.length; i++) {
      if (this.props.time == this.state.items[i].created_at) {
        return i;
      }
    }
  },
  previous: function(e) {
    var newCurrent = this.state.items[this.currentIndex() - 1];
    if (newCurrent) {
      Aviator.navigate('/time/' + newCurrent.created_at);
    }
  },
  next: function(e) {
    var newCurrent = this.state.items[this.currentIndex() + 1];
    if (newCurrent) {
      Aviator.navigate('/time/' + newCurrent.created_at);
    }
  },
  render: function() {
    var P = Views.Photo;
    var photo = <P created_at={this.props.time} />;
    return (
      <div className="photo-list pure-g">
        <div className="left pure-u-1-5"><button onClick={this.previous}>Previous</button></div>
        <div className="photo pure-u-3-5">{photo}</div>
        <div className="right pure-u-1-5"><button onClick={this.next}>Next</button></div>
      </div>
    );
  }
});

