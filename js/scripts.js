$(document).ready(function () {
    $("form#custom").submit(function (event) {
      event.preventDefault();
      drinks = $("input[type=checkbox]:checked").map(function (_, sel) {
          return $(sel).val();
        })
        .get();