
FlowRouter.route('/passenger', {
  name: 'searchMenu',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "searchMenu"});
  }
});

FlowRouter.route('/searchResults', {
  name: 'searchResults',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "searchResults"});
  }
});


FlowRouter.route('/trajet/:id_trajet', {
  name: 'details',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "details"});
  }
});

FlowRouter.route('/help', {
  name: 'help',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "help"});
  }
});

FlowRouter.route('/parameters', {
  name: 'parameters',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "parameters"});
  }
});
