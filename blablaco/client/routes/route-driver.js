FlowRouter.route('/driver', {
  name: 'driver',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "driver"});
  }
});
