Template.history.onRendered ( function(){
  var url_string = document.URL;
  var url = new URL(url_string);
  var notification = url.searchParams.get('newRequestNotification');
  if(notification == 'true'){
    window.setTimeout(showPhoneNotification, 1000);
  }
});

function showPhoneNotification() {
  $('#dialog').dialog({ width: $(window).width() /* insert your options */ }).dialog('widget').position({ my: 'top', at: 'top', of: $(this) });
}
