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
    });