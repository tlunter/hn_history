/** @jsx React.DOM */
var Views = Views || {};
Views.FrontPage = React.createClass({
  getInitialState: function() {
    return {
      realTime: ((new Date()).getTime() / 1000).toFixed()
    };
  },
  setRealTime: function(newTime) {
    this.setState({realTime: newTime});
  },
  render: function() {
    var TS = Views.TimeSelector;
    var EL = Views.EntryList;
    var entryList = new Models.EntryList(this.state.realTime);
    return (
      <div>
        <TS handler={this.setRealTime} />
        <EL modelList={entryList} />
      </div>
    );
  }
});
