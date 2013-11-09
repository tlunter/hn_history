/** @jsx React.DOM */
Views.Photo = React.createClass({
  render: function() {
    var EL = Views.EntryList;
    var entries = <EL photo={this.props.photo} />;
    var date = new Date(this.props.photo.created_at * 1000);
    return (
      <div className="date">{date.toLocaleString()}
        <div className="photo">{entries}</div>
      </div>
    );
  }
});
