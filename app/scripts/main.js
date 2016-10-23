
// $(document).ready(function () {
//     var theHeight = $(window).height() - 156;

//     function theHeightResize() {
//         var theHeight = $(window).height() - 156;
//         $('.logo-wrapper').css('height', theHeight);
//         $(".logo-wrapper").css("height", theHeight);  
//         console.log(theHeight);
//     } 
//     theHeightResize();
//     $(window).resize(theHeightResize);   

//     function stickyNav() { 
//         $(".logo-wrapper").css('height', theHeight);
//         if ($(window).scrollTop() > theHeight) {
//             $('.nav').addClass('nav-fixed');
//             $('.title').addClass('title-fixed');
//             $('.title').stop().animate({height: "60px"},50);
//         }
//         if ($(window).scrollTop() < theHeight - 1) {
//             $('.nav').removeClass('nav-fixed');
//             $('.title').removeClass('title-fixed');
//             $('.title').stop().animate({height: "110px"},50);
//         } 
//     }
//     stickyNav();
//     $(window).resize(stickyNav);
//     $(window).scroll(stickyNav);

//     function resizeNav() {
//         $('a').click(function(){
//             $('html, body').animate({
//                 scrollTop: $( $.attr(this, 'href') ).offset().top
//             }, 500);
//             return false;
//         });    
//     }
//     resizeNav();

// });    
$(document).ready(function () {
    updateContainer();
    
    $(window).resize(function() {
        updateContainer();
    });

    // $('html, body').scrollTop(0);

    //     $(window).on('load', function() {
    //     setTimeout(function(){
    //         $('html, body').scrollTop(0);
    //     }, 0);

    function updateContainer() {
        var theHeight = $(window).height();
        var bgHeight = $('header.logo-wrapper').height();
        $('.logo-wrapper').css('height', theHeight - 180);
        $('.skip-fix-title').css('height', theHeight);
        $('.title').css('top', theHeight - 180);
        $('.nav').css('top', theHeight - 180);
        $('.nav-fixed').css('top', theHeight - 180);
    }

    $(window).scroll(function () {
        var theHeight = $(window).height() - 180;

    if ($(window).scrollTop() > theHeight) {
        $('.nav').addClass('nav-fixed');
        $('.title').addClass('title-fixed');
        $('.title').stop().animate({height: "60px"}, 80);
        $('.nav').stop().animate({height: "40px"}, 80);
        $('.bg-image').addClass('relative');
    }
    if ($(window).scrollTop() < theHeight - 1) {
        // $('.title').css('top', theHeight - 180);
        // $('.nav').css('top', theHeight - 180);
        $('.nav').removeClass('nav-fixed');
        $('.title').removeClass('title-fixed');
        $('.title').stop().animate({height: "125px"}, 80);
        $('.nav').stop().animate({height: "55px"}, 80);
        $('.bg-image').addClass('relative');
    }
    if ($(window).scrollTop() > theHeight + 100) { 
        $('.title').addClass('title-opacity');
    } 
    if ($(window).scrollTop() < theHeight + 99) { 
        $('.title').removeClass('title-opacity');
    } 

// prevents page from reloading where user left off on page
    // if (window.location.hash) { 
    //        //bind to scroll function
    //        $(document).scroll( function() {
    //            var hash = window.location.hash
    //            var hashName = hash.substring(1, hash.length);
    //            var element;

    //            //if element has this id then scroll to it
    //            if ($(hash).length != 0) {
    //                element = $(hash);
    //            }
    //            //catch cases of links that use anchor name
    //            else if ($('a[name="' + hashName + '"]').length != 0)
    //            {
    //                //just use the first one in case there are multiples
    //                element = $('a[name="' + hashName + '"]:first');
    //            }

    //            //if we have a target then go to it
    //            if (element != undefined) {
    //                window.scrollTo(0, element.position().top);
    //            }
    //            //unbind the scroll event
    //            $(document).unbind("scroll");
    //        });
    //    }

    });
});

    // function stickyNav() {
    //     var theHeight = $(window).height() - 156;
        
    //     if ($(window).scrollTop() > theHeight) {
    //       $('.nav').addClass('nav-fixed');
    //       $('.nav').addClass('title-fixed');
    //       $('.title').stop().animate({height: "60px"},50);
    //     }
    //     if ($(window).scrollTop() < theHeight - 1) {
    //       $('.nav').removeClass('nav-fixed');
    //       $('.nav').removeClass('title-fixed');
    //       $('.title').stop().animate({height: "110px"},50);
    //     }
    // }    


    // function resizeNav() {
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });    
    // }




       





