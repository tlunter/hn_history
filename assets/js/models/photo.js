var Models = Models || {};

Models.Photo = function (superClass) {
  var $Photo = function(properties) {
    _.extend(this, Models.Model.prototype);
    Models.Model.call(this, properties);
    this.setUrl(this.created_at);
  }

  $Photo.prototype.setUrl = function(time) {
    this.rootUrl = '/api/photos/' + time;
  };

  return $Photo;
}();
