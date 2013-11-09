var Models = Models || {};

Models.PhotoList = function(superClass) {
  var $PhotoList = function (rootUrl) {
    _.extend(this, Models.ModelList.prototype);
    Models.ModelList.call(this, Models.Photo);
    this.rootUrl = rootUrl || '/api/photos';
  }

  return $PhotoList;
}();
