/** @jsx React.DOM */
var Views = Views || {};
Views.PhotoList = React.createClass({
  setItems: function() {
    var ml = this.props.modelList.items;
    if (ml.length > 0 && this.state.current === undefined) {
      var current = ml[ml.length-1].created_at;
      this.props.handler(ml[ml.length-1].created_at);
    } else {
      var current = this.state.current;
    }
    this.setState({
      items: ml,
      current: current
    });
  },
  getInitialState: function() {
    return { items: [] };
  },
  componentDidMount: function() {
    this.loadModelList(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    this.loadModelList(nextProps);
  },
  loadModelList: function(props) {
    var modelList = props.modelList;

    modelList.on('loaded', this.setItems);
    modelList.load();
  },
  onChange: function(e) {
    this.props.handler(e.target.options[e.target.selectedIndex].value);
    this.setState({current:e.target.options[e.target.selectedIndex].value});
  },
  render: function() {
    var P = Views.Photo;
    var photoNodes = this.state.items.map(function (photo) {
      return <P model={photo} />;
    });
    return (
      <select onChange={this.onChange} value={this.state.current}>{photoNodes}</select>
    );
  }
});

