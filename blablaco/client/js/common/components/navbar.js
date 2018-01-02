Template.navbar.events({
  'click .show-hide-menu' : hideShowSideBar
});

function hideShowSideBar(event, template) {
  alert('ok');
  var x = document.getElementById("sidebarComponent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
