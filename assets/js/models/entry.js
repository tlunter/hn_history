var Models = Models || {};

Models.Entry = function (superClass) {
  var $Entry = function(properties) {
    _.extend(this, Models.Model.prototype);
    Models.Model.call(this, properties);
    this.rootUrl = '/api/entries/' + this.id;
  }
  return $Entry;
}();

