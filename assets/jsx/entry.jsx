/** @jsx React.DOM */
var Views = Views || {};
Views.Entry = React.createClass({
  render: function() {
    return <div className="pure-u-1-2" key={this.props.entry.id}>
      <div className="entry">
        <div className="position">{this.props.entry.position}.{' '}</div>
        <div className="title">
          <a href={this.props.entry.link}>
            {this.props.entry.title}
          </a>
        </div>
      </div>
    </div>;
  }
});
