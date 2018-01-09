FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "home"});
  }
});
FlowRouter.route('/inscription', {
  name: 'inscription',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "inscription"});
  }
});

FlowRouter.route('/terms_of_use', {
  name: 'terms_of_use',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "terms_of_use"});
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


FlowRouter.route('/mails', {
  name: 'mailbox',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "mailbox"});
  }
});


FlowRouter.route('/discussion/:id_discussion', {
  name: 'discussion',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "discussion"});
  }
});

FlowRouter.route('/balance', {
  name: 'balance',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "balance"});
  }
});
