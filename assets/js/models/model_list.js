var Models = Models || {};

Models.ModelList = function(superClass) {
  var $ModelList = function (model) {
    _.extend(this, Models.Eventable.prototype);
    this.model = model;
    this.items = [];
  };

  $ModelList.prototype = {
    load: function (success) {
      reqwest({
        url: this.rootUrl,
        method: 'get',
        success: (function (resp) {
          this.items = resp.map(function (item) {
            return new this.model(item);
          }, this);
          if (typeof(success) === 'function') {
            success();
          }
          this.fire('loaded');
        }).bind(this)
      });
    }
  };
  return $ModelList;
}();
