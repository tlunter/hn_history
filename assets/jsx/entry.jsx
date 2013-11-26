/** @jsx React.DOM */
var Views = Views || {};
Views.Entry = React.createClass({
  render: function() {
    return <div className="pure-u-1-2" key={this.props.entry.id}>
      <div className="entry">
        {this.props.entry.position}.{' '}
        <a href={this.props.entry.link}>
          {this.props.entry.title}
        </a>
      </div>
    </div>;
  }
});
