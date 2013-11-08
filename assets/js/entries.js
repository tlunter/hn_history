/** @jsx React.DOM */
var Photo = React.createClass({
  render: function() {
    return <div>{this.props.data.title}</div>;
  }
});

var PhotoList = React.createClass({
  loadPhotos: function () {
    $.ajax({
      url: '/api/photos/' + this.props.entry_id,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data:[]};
  },
  componentWillMount: function() {
    this.loadPhotos();
    setInterval(this.loadPhotos, 20000);
  },
  render: function() {
    var photoNodes = this.state.data.map(function (photo) {
      return <Photo data={photo} />;
    });
    return (
      <div>{photoNodes}</div>
    );
  }
});

var Entry = React.createClass({
  render: function() {
    var photos = <PhotoList entry_id={this.props.entry_id} />;
    return <div className="entry">{photos}</div>;
  }
});

var EntryList = React.createClass({
  loadEntries: function() {
    $.ajax({
      url: '/api/entries/',
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data:[]};
  },
  componentWillMount: function() {
    this.loadEntries();
    setInterval(this.loadEntries, 20000);
  },
  render: function() {
    var entryNodes = this.state.data.map(function (entry) {
      return <Entry entry_id={entry.id} />;
    });
    return (
      <div className="entryList">
        {entryNodes}
      </div>
    );
  }
});

React.renderComponent(
  <EntryList />,
  document.getElementById('content')
);
