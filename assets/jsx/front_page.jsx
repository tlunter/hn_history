/** @jsx React.DOM */
var Views = Views || {};
Views.FrontPage = React.createClass({
  render: function() {
    var PL = Views.PhotoList;
    var EL = Views.EntryList;
    var photoList = new Models.PhotoList(this.props.time);
    var entryList = new Models.EntryList(this.props.time);
    return (
      <div>
        <PL modelList={photoList} time={this.props.time} />
        <EL modelList={entryList} />
      </div>
    );
  }
});
