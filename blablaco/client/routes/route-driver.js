FlowRouter.route('/driver', {
  name: 'driver',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "formAddTravel"});
  }
});

FlowRouter.route('/driver/:id_trajet', {
  name: 'driver',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "formEditTravel"});
  }
});
