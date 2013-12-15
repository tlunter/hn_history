var Routes = function() {
};

Routes.prototype.dispatch = function(targets) {
  Aviator.setRoutes({
    target: targets.appRouteTarget,
    '/': 'frontpage',
    '/timeline': {
      target: targets.appRouteTarget,
      '/:entry_id': 'timeline'
    }
  });

  Aviator.dispatch();
};
