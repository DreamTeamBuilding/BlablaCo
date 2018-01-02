Template.navbar.events({
  'click .show-hide-menu' : hideShowSideBar
});

function hideShowSideBar(event, template) {
  if($('#sidebarComponent').attr('hidden')){
    $('#sidebarComponent').removeAttr('hidden');
  }else {
    $('#sidebarComponent').attr('hidden', true);
  }
}
