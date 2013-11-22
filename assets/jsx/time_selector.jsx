/** @jsx React.DOM */
var Views = Views || {};
Views.TimeSelector = React.createClass({
  getInitialState: function() {
    return {
      seconds: ((new Date()).getTime() / 1000).toFixed()
    };
  },
  inputChange: function(e) {
    this.onChange(e.target.value);
  },
  onChange: function(time) {
    this.setState({
      seconds: time
    });
    this.props.handler(time);
  },
  render: function() {
    var PL = Views.PhotoList;
    var photoList = new Models.PhotoList(this.state.seconds);
    return (
      <div>
        <PL handler={this.onChange} modelList={photoList} />
      </div>
    );
  }
});
