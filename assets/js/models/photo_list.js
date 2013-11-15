var Models = Models || {};

Models.PhotoList = function(superClass) {
  var $PhotoList = function (time) {
    _.extend(this, Models.ModelList.prototype);
    Models.ModelList.call(this, Models.Photo);
    this.setTime(time);
  }

  $PhotoList.prototype.setTime = function(time) {
    this.rootUrl = '/api/photos/';
    if (time) {
      this.rootUrl += time;
    }
  };

  return $PhotoList;
}();
