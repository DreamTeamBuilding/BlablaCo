
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
