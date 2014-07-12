var RouteTargets = RouteTargets || {};

RouteTargets.AppRouteTargets = function() {
  _.extend(this, RouteTargets.BaseRouteTargets.prototype);
};

RouteTargets.AppRouteTargets.prototype = {
  frontpage: function (request, options) {
    Aviator.navigate('/time/' + ((new Date()).getTime() / 1000).toFixed());
  },
  photo: function (request, options) {
    this.showSection(Views.FrontPage({time:request.params.photo_id}));
  },
  timeline: function (request, options) {
    this.showSection(Views.Timeline({entryId: request.params.entry_id}));
  }
};
