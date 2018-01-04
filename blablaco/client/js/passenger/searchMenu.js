Template.searchMenu.events({
  'keyup .text-input-trigger' : hideShowSideOptions,
  'click .voice-button' : vocalInput,
  'click .switch-button' :  switchInputs
});

function hideShowSideOptions(event, template) {
  if($('#depart-input').val()!="" && $('#arrivee-input').val()!=""){
    $('.search-advanced-options').removeAttr('hidden');
  }else {
    $('.search-advanced-options').attr('hidden', true);
  }
}

function vocalInput(event, template){
  alert('Enregistrement audio...');
}

function switchInputs(event, template){
  var temp = $('#depart-input').val();
  $('#depart-input').val($('#arrivee-input').val());
  $('#arrivee-input').val(temp);
}
