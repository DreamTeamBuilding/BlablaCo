FlowRouter.route('/', {
  name: 'accueil',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "accueil"});
  }
});

FlowRouter.route('/details', {
  name: 'details',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "details"});
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "test"});
  }
});
