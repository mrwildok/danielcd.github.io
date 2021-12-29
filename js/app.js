$(document).ready(function() {

  setTimeout(function(){
       $('#loader-wrapper').addClass('hide-content');
       $('body').css('animation-name' , 'load-down').css('animation-duration' , '1s').css('animation-timing-function' , 'easy-in-out');
   }, 3000);


  $( "button" ).click(function() {
       if ( $("#button-main").hasClass('open')) {
         $("#button-main").removeClass('open').addClass('close');
       }
       else {
         $("#button-main").removeClass('close').addClass('open');
       }
       if ( $("nav").hasClass('hide-content')) {
         $("nav").removeClass('hide-content').addClass('show-content');
       }
       else {
         $("nav").removeClass('show-content').addClass('hide-content');
       }
    });
});


$(document).ready(function(){
    $(window).scroll(function(){
        var trigger1 = $("#trigger1").offset().top;
        var scrollVal = $(this).scrollTop() + 50;

        if(scrollVal >= trigger1){
            $("#bar-nav").addClass('bar-nav-background');
            $("#bar-nav").removeClass('bar-nav-transparent');
        } else {
            $("#bar-nav").removeClass('bar-nav-background');
            $("#bar-nav").addClass('bar-nav-transparent');
        };
    });
});
