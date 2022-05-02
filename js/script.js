$(document).ready(function () {

// === Begin button ripple style === \\\
$(".ripple").on("click", function(event) {
   var _this = $(this),
       offset = $(this).offset(),
       positionX = (event.pageX - offset.left),
       positionY = (event.pageY - offset.top);
   _this.append("<span class='ripple-effect'>");
   _this.find(".ripple-effect").css({
       left: positionX,
       top: positionY
   }).animate({
       opacity: 0,
   }, 1500, function() {
       $(this).remove();
   });
});
// === End button ripple style === \\\

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop());

    if(scrolledpx > 200){
        $('.b-header').addClass('header-fix');
    } else if(scrolledpx < 199){
        $('.b-header').removeClass('header-fix');
    }

});


$('.menu-icon').click(function(){
    $('.b-header__right').toggleClass('active');
    $('.menu-icon').toggleClass('active');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-header__right , .menu-icon").length) {
            $('.b-header__right').removeClass('active');
            $('.menu-icon').removeClass('active');
        }
        event.stopPropagation();
    });
});



// === Begin modal === \\\
$(".modal-link").on("click", function() {
    $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"] , body').addClass("active");
    $('body').addClass('b-active');
    $('.b-nav , .b-container , .btn-nav ').removeClass('active');

    $(document).on("click", function(e) {
        if(!$(e.target).closest(".b-modal").length && !$(e.target).closest(".modal-link , .b-nav , .btn-nav").length) {
            $(".modal-overlay , body").removeClass("active");
            $('body').removeClass('b-active');
        }
    });

});

$(".b-modal__static-close").on("click", function() {
    $(".modal-overlay").removeClass("active");
});
// === End modal === \\\

var $page = $('html, body');
$('.b-nav a[href*="#"] , .b-footer__nav a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


    function moveMenu(){
        if ($(window).width() < 767) {
            $(function(){




            })
        } else{
            $(function(){


                $('.map-xs #map').appendTo('.b-footer__right');

            })
        }
    }
    moveMenu();

    $(window).resize(function(){
        moveMenu();
    });

});



