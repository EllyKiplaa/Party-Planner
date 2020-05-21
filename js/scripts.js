$(document).ready(function() {
    $('.scroll-link').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#gallery").offset().top
      }, 800);
  
    });
  });

$(document).ready(function() {
    $('.nav-item').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#Services").offset().top 
      }, 1000);
  
    });
  });

 
