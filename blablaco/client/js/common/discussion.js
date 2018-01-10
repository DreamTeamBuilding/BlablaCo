Template.discussion.onRendered ( function(){
  var url_string = document.URL;
  var url = new URL(url_string);
  var param = url.searchParams.get('scenario');
  if(param == '2'){
    $('#message-first').removeAttr('hidden');
    $('#message-second').removeAttr('hidden');
  }
});

Template.discussion.events({
  'click #btn-chat' : hideReturnMenu
});

function hideReturnMenu(event, template){
  var url_string = document.URL;
  var url = new URL(url_string);
  var param = url.searchParams.get('scenario');
  if(param == '1'){
    $('#message-first').removeAttr('hidden');
    window.setTimeout(function(){
      $('#message-second').removeAttr('hidden');
    }, 1000);
  }
  if(param == '2'){
    $('#message-third').removeAttr('hidden');
    window.setTimeout(function(){
      $('#message-fourth').removeAttr('hidden');
    }, 1000);
  }

}



/*
window.setTimeout(function(){
  $('#message-second').classList.remove("hidden");
}, 1000);*/
