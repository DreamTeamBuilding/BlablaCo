function acceptRequest(){
  $('.pending-request').attr('hidden', true);
  $('.pending-request-label').attr('hidden', true);

  $('.new-accepted-request').removeAttr('hidden');
  $('.no-pending-request-label').removeAttr('hidden');
}

Template.demande.events({
  'click #accept' : acceptRequest
});
