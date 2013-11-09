var Models = Models || {};

Models.Eventable = function () {
  var $Eventable = function () { };

  $Eventable.prototype = {
    on: function(evt, handler) {
      this._handlers = this._handlers || {};
      this._handlers[evt] = this._handlers[evt] || [];
      this._handlers[evt].push(handler);
    },
    fire: function(evt) {
      var handlers = this._handlers && this._handlers[evt];

      if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
          handlers[i]();
        }
      }
    }
  };

  return $Eventable;
}();
