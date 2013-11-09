/** @jsx React.DOM */
Views.Photo = React.createClass({
  render: function() {
    var EL = Views.EntryList;
    var entries = <EL photo={this.props.photo} />;
    return (
      <div className="date">{this.props.photo.created_at}
        <div className="photo">{entries}</div>
      </div>
    );
  }
});
