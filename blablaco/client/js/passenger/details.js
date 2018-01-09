Template.details.events({
  'click .reserver-button' : showNotif
});

function showNotif(event, template){
  $('#notification-reservation').removeAttr('hidden');
}
