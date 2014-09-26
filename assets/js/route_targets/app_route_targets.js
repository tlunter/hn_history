var RouteTargets = RouteTargets || {};

RouteTargets.AppRouteTargets = function() {
  _.extend(this, RouteTargets.BaseRouteTargets.prototype);
};

RouteTargets.AppRouteTargets.prototype = {
  frontpage: function (request, options) {
    var photoList = new Models.PhotoList();
    this.showSection(Views.FrontPage({ modelList: photoList }));
  },
  photo: function (request, options) {
    var photoList = new Models.PhotoList(request.params.photo_id);
    this.showSection(Views.FrontPage({ modelList: photoList, time: request.params.photo_id }));
  },
  timeline: function (request, options) {
    this.showSection(Views.Timeline({ entryId: request.params.entry_id }));
  }
};
