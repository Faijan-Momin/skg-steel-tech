$(document).ready(function(){
    $('#hamburger-ul').click(function(){
          $(this).toggleClass('active');
          $('#mobile-side-nav').toggleClass('active');
    });

    $('.hamubuger').click(function(){
        $('#hamburger-ul').toggleClass('active');
        $('#mobile-side-nav').toggleClass('active');
  });
});

