/** @jsx React.DOM */
var Views = Views || {};
Views.Timeline = React.createClass({
  render: function() {
    var EG = Views.EntryGraph;
    var entryList = new Models.EntryList("" + this.props.entryId + "/timeline");
    return (
      <div>
        <EG modelList={entryList} />
      </div>
    );
  }
});
