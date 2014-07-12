var Routes = function() {
};

Routes.prototype.dispatch = function(targets) {
  Aviator.setRoutes({
    target: targets.appRouteTarget,
    '/': 'frontpage',
    '/time/:photo_id': 'photo',
    '/graph/:entry_id': 'timeline'
  });

  Aviator.dispatch();
};
