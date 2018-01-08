Template.formAddTravel.events({
  'change .toggle-return' : hideReturnMenu
});

function hideReturnMenu(event, template){
  if($('#toggle-return').prop('checked') == false){
    $('.return-form').attr('hidden', true);
  } else {
    $('.return-form').removeAttr('hidden');
  }
}
