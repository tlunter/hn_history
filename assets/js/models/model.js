var Models = Models || {};

Models.Model = function(superClass) {
  var $Model = function(properties) {
    _.extend(this, Models.Eventable.prototype);
    this.setProperties(properties);
  }
  
  $Model.prototype = {
    load: function() {
      reqwest({
        url: this.rootUrl,
        method: 'get',
        success: function (resp) {
          this.setProperties(resp);
        }
      });
    },
    setProperties: function(properties) {
      for (var property in properties) {
        if (properties.hasOwnProperty(property)) {
          this[property] = properties[property];
        }
      }
    }
  };
  return $Model;
}();

