Template.details.events({
  'click .reserver-button' : showNotif
});

function showNotif(event, template){
  $('#notification-reservation').removeAttr('hidden');
  window.setTimeout(showPhoneNotification, 1000);
}

function showPhoneNotification() {
  $('#dialog').dialog({ width: $(window).width() /* insert your options */ }).dialog('widget').position({ my: 'top', at: 'top', of: $(this) });
}
