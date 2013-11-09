var Models = Models || {};

Models.EntryList = function(superClass) {
  var $EntryList = function (photoId) {
    _.extend(this, Models.ModelList.prototype);
    Models.ModelList.call(this, Models.Entry);
    this.photoId = photoId;
    this.rootUrl = '/api/entries/' + this.photoId;
  }

  return $EntryList;
}();
