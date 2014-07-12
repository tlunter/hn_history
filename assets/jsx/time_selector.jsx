/** @jsx React.DOM */
var Views = Views || {};
Views.TimeSelector = React.createClass({
  render: function() {
    var PL = Views.PhotoList;
    var photoList = new Models.PhotoList(this.props.seconds);
    return (
      <div>
        <PL handler={this.onChange} modelList={photoList} />
      </div>
    );
  }
});
