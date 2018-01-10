Template.searchMenu.events({
  'keyup .text-input-trigger' : hideShowSideOptions,
  'click .voice-button' : vocalInput,
  'click .switch-button' :  switchInputs
});

Template.searchMenuNoteNotification.events({
  'keyup .text-input-trigger' : hideShowSideOptions,
  'click .voice-button' : vocalInput,
  'click .switch-button' :  switchInputs
});

Template.requestTravel.events({
  'keyup .text-input-trigger' : hideShowSideOptions
})
Template.searchResults.events({
  'click .switch-button' :  switchInputs,
  'click .hide-filters' :  hideFilters,
  'click .show-filters' :  showFilters,
  'input #toleranceSlider' : updateRange,
  'input #toleranceSliderH' : updateRangeH,
});
Template.searchResults.onRendered(initFilters);

Template.searchMenuNoteNotification.onRendered ( function(){
  window.setTimeout(showPhoneNotification, 1000);
});

function showPhoneNotification() {
  $('#dialog').dialog({ width: $(window).width() /* insert your options */ }).dialog('widget').position({ my: 'top', at: 'top', of: $(this) });
}

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

function updateRange(event, template){
  $('#label-slider-range').html($('#toleranceSlider').val().toString());
}
function updateRangeH(event, template){
  $('#label-slider-rangeH').html($('#toleranceSliderH').val().toString());
}

function initFilters(){
  hideFilters(null, null);
}
