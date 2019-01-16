

$(function() {
  $("form#superForm").submit(function(event){
  event.preventDefault();
  var beverage = $("#beverage").val();
  console.log(beverage);
  })
})
