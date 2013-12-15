/** @jsx React.DOM */
var Views = Views || {};
Views.Entry = React.createClass({
  render: function() {
    return <div className="pure-u-1-2" key={this.props.entry.id}>
      <div className="entry">
        <div className="position">{this.props.entry.position}</div>
        <div>
          <div className="title">
            <a href={this.props.entry.link}>
              {this.props.entry.title}
            </a>
          </div>
          <div className="links">
            <ul className="nav">
              <li>
                <a href={"http://news.ycombinator.com/item?id=" + this.props.entry.entry_id}>
                  Comments 
                </a>
              </li>
              <li>
                <a href={"/timeline/" + this.props.entry.entry_id}>
                  Timeline
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
  }
});
