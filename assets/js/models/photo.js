var Models = Models || {};

Models.Photo = function (superClass) {
  var $Photo = function(properties) {
    _.extend(this, Models.Model.prototype);
    Models.Model.call(this, properties);
    this.rootUrl = '/api/photos/' + this.id;
  }
  return $Photo;
}();
