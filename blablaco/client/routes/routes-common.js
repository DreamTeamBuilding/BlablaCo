FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "home"});
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


FlowRouter.route('/searchMenu', {
  name: 'searchMenu',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "searchMenu"});
  }
});

FlowRouter.route('/inscription', {
  name: 'inscription',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "inscription"});
  }
});
