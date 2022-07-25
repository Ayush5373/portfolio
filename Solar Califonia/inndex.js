// $('.burgur-menu').click(function(){
//  $().next().toggleclass('.nav-item');
// });
$(document).ready(function(){
    $(".burgur-menu").click(function(){
      $(".nav-item").toggle(500);
    });
  });