Template.formAddTravel.events({
  'change .toggle-return' : hideReturnMenu,
  'click #less-money' : decreaseCost,
  'click #more-money' : increaseCost,
  'click #less-passengers' : decreasePassengerCount,
  'click #more-passengers' : increasePassengerCount
});

function hideReturnMenu(event, template){
  if($('#toggle-return').prop('checked') == false){
    $('.return-form').attr('hidden', true);
  } else {
    $('.return-form').removeAttr('hidden');
  }
}
function decreaseCost(event, template){
  event.preventDefault();
  value = Math.max(0,parseInt($("#input-price").val()) - 1);
  $("#input-price").val(value.toString());
}

function increaseCost(event, template){
  event.preventDefault();
  value = parseInt($("#input-price").val()) + 1;
  $("#input-price").val(value.toString());
}
function decreasePassengerCount(event, template){
  event.preventDefault();
  value = Math.max(1,parseInt($("#input-number-passengers").val()) - 1);
  $("#input-number-passengers").val(value.toString());
  if(value==1){
    $("#label-number-passengers").html('passager');
  }
}

function increasePassengerCount(event, template){
  event.preventDefault();
  value = parseInt($("#input-number-passengers").val()) + 1;
  $("#input-number-passengers").val(value.toString());
  $("#label-number-passengers").html('passagers');
}
