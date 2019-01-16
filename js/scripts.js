

$(function() {
  $(".superForm").submit(function(event){
    event.preventDefault();

    var beverage = $("select#beverage").val();
    $(".beverageChoice").text(beverage);

    var pet = $("input:radio[name=animal]:checked").val();
    $(".petChoice").text(pet);

    var vacayDay = $("#vacay").val();
    $(".vacayDay").text(vacayDay);

    var favColor= $("#color").val();
    console.log(favColor)
    $("body").css("background-color",favColor);

  });
});
