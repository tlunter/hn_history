/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  componentWillMount: function() {
    document.addEventListener('keypress', this.onKeyPress);
  },
  componentWillUnmount: function() {
    document.removeEventListener('keypress', this.onKeyPress);
  },
  onKeyPress: function(e) {
    if (e.keyCode == 104) {
      this.previous();
    } else if (e.keyCode == 108) {
      this.next();
    } else if (e.keyCode == 102) {
      this.autoUpdate();
    }
  },
  currentIndex: function () {
    for (i = 0; i < this.props.times.length; i++) {
      if (this.props.time == this.props.times[i].created_at) {
        return i;
      }
    }
  },
  previous: function(e) {
    var newCurrent = this.props.times[this.currentIndex() - 1];
    if (newCurrent) {
      Aviator.navigate('/time/' + newCurrent.created_at);
    }
  },
  next: function(e) {
    var newCurrent = this.props.times[this.currentIndex() + 1];
    if (newCurrent) {
      Aviator.navigate('/time/' + newCurrent.created_at);
    }
  },
  autoUpdate: function(e) {
    if (!this.props.autoUpdate) {
      Aviator.navigate('/');
    }
  },
  render: function() {
    var ci = this.currentIndex();
    var prev = this.props.times[ci - 1];
    var next = this.props.times[ci + 1];
    return (
      <div className="photo-list pure-g">
        <div className="left pure-u-1-5">
          <button onClick={this.previous} disabled={!prev}>Previous</button>
        </div>
        <div className="photo pure-u-3-5">
          <Views.Photo created_at={this.props.time} />
          <button onClick={this.autoUpdate} disabled={this.props.auto_update}>Auto Update</button>
        </div>
        <div className="right pure-u-1-5">
          <button onClick={this.next} disabled={!next}>Next</button>
        </div>
      </div>
    );
  }
});

