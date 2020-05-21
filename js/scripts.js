$(document).ready(function () {
  $("form#custom").submit(function (event) {
    event.preventDefault();
    drinks = $("input[type=checkbox]:checked").map(function (_, sel) {
        return $(sel).val();
 })
      .get();

    if (drinks === undefined || drinks.length == 0) {
      alert("make selections please");
      return false;
    } else {
      $("#drinks").html("")
      drinks.forEach(drink => {
        $("#drinks").append("<li class='drink'>" + drink + "</li>");
      });
    };

    let security = $("#select option:selected").text();
    let securityCost = parseInt($("#select option:selected").val())

    $("#security").text(security);
    myArray.push(securityCost)

    let total = 0;

    myArray.forEach(n => {
      total += n
      $("#total").text(total)
    });
  });
  
});