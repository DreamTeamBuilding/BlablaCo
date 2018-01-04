Template.searchMenu.events({
  'keyup .text-input-trigger' : hideShowSideOptions,
  'click .voice-button' : vocalInput,
  'click .switch-button' :  switchInputs
});

Template.searchResults.events({
  'click .switch-button' :  switchInputs,
  'click .hide-filters' :  hideFilters,
  'click .show-filters' :  showFilters
});
Template.searchResults.onRendered(initFilters);
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

function hideFilters(event, template){
    $('.replace-filters').removeAttr('hidden');
    $('.filters').attr('hidden', true);
}

function showFilters(event, template){
    $('.filters').removeAttr('hidden');
    $('.replace-filters').attr('hidden', true);
}

function initFilters(){
  hideFilters(null, null);
}
