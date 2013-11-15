/** @jsx React.DOM */
var Views = Views || {};
Views.App = React.createClass({
  getInitialState: function() {
    return {
      prettyTime: 'latest',
      realTime: ((new Date()).getTime() / 1000).toFixed()
    };
  },
  setTime: function(newTime) {
    var time;
    if (newTime === 'latest') {
      time = ((new Date()).getTime() / 1000).toFixed();
    } else {
      time = ((new Date(newTime)).getTime() / 1000).toFixed();
    }
    this.setState({
      prettyTime: newTime,
      realTime: time
    });
  },
  render: function() {
    var TS = Views.TimeSelector;
    var P = Views.Photo;
    var photo = new Models.Photo({created_at: this.state.realTime});
    return (
      <div>
        <TS handler={this.setTime} />
        <P model={photo} />
      </div>
    );
  }
});
