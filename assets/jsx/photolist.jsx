/** @jsx React.DOM */
Views.PhotoList = React.createClass({
  modelList: new Models.PhotoList('/api/photos/latest'),
  loadPhotos: function() {
    this.modelList.on('loaded', this.setItems);
    this.modelList.load();
  },
  setItems: function() {
    this.setState({ items: this.modelList.items });
  },
  getInitialState: function() {
    return { items: [] };
  },
  componentWillMount: function() {
    this.loadPhotos();
    setInterval(this.loadPhotos, 2000);
  },
  render: function() {
    var P = Views.Photo;
    var photoNodes = this.state.items.map(function (photo) {
      return <P photo={photo} />;
    });
    return (
      <div>{photoNodes}</div>
    );
  }
});

