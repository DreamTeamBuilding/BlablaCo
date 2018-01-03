Template.searchMenu.events({
  'keyup .text-input-trigger' : hideShowSideOptions
});

function hideShowSideOptions(event, template) {
  if($('#depart-input').val()!="" && $('#arrivee-input').val()!=""){
    $('.search-advanced-options').removeAttr('hidden');
  }else {
    $('.search-advanced-options').attr('hidden', true);
  }
}
