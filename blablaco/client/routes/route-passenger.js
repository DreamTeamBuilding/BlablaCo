
FlowRouter.route('/passenger', {
  name: 'searchMenu',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "searchMenu"});
  }
});

FlowRouter.route('/passenger2', {
  name: 'searchMenuNoteNotification',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "searchMenuNoteNotification"});
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

FlowRouter.route('/requestTravel', {
  name: 'requestTravel',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "requestTravel"});
  }
});

FlowRouter.route('/noteTravel', {
  name: 'noteTravel',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "noteTravel"});
  }
});
