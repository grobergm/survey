

$(function() {
  $(".superForm").submit(function(event){
    event.preventDefault();
    var userName = $("input#yourName").val();

    var beverage = $("select#beverage").val();
    $(".beverageChoice").text(beverage);

    var pet = $("input:radio[name=animal]:checked").val();
    $(".petChoice").text(pet);

    var vacayDay = $("#vacay").val();
    $(".vacayDay").text(vacayDay);

    var favColor= $("#color").val();
    $("body").css("background-color",favColor);

    if(!userName){
      $("input#yourName").addClass("is-invalid")
    } else if (userName){
      $("input#yourName").addClass("is-valid");
    }
  });
});
