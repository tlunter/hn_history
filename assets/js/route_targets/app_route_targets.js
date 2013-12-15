var RouteTargets = RouteTargets || {};

RouteTargets.AppRouteTargets = function() {
  _.extend(this, RouteTargets.BaseRouteTargets.prototype);
};

RouteTargets.AppRouteTargets.prototype = {
  frontpage: function (request, options) {
    this.showSection(Views.FrontPage());
  },
  timeline: function (request, options) {
    this.showSection(Views.Timeline({entryId: request.params.entry_id}));
  }
};
