$(document).ready(function() {
  // $('#title').fadeOut(0);
  // $('#menu').fadeOut(0);
  
  // $('#socialdropdown').slideUp(0);
  // $('#listendropdown').slideUp(0);
  // $('#contactdropdown').slideUp(0);
  // $('#storedropdown').slideUp(0);
  
  // $('#overlay').css('opacity', '0');
  // $('#overlay').css('z-index', '-1');
  
  Pace.on('done', function() {
    $('#overlay').css('opacity', '0');
    $('#overlay').css('z-index', '-1');
  
    $('#socialdropdown').slideUp(0);
    $('#listendropdown').slideUp(0);
    $('#contactdropdown').slideUp(0);
    $('#storedropdown').slideUp(0);
  
    $('#title').fadeOut(0);
    $('#menu').fadeOut(0);
    $('#title').fadeIn(2000);
    $('#menu').fadeIn(2000);
  });
  
  
  $("#social").hover(function() {
    $('#socialdropdown').stop(true, false).slideDown('slow');
  }, function() {
    $('#socialdropdown').stop(true, false).slideUp('slow');
  });
  
  $("#listen").hover(function() {
    $('#listendropdown').stop(true, false).slideDown('slow');
  }, function() {
    $('#listendropdown').stop(true, false).slideUp('slow');
  });
  
  $("#contact").hover(function() {
    $('#contactdropdown').stop(true, false).slideDown('slow');
  }, function() {
    $('#contactdropdown').stop(true, false).slideUp('slow');
  });
  
  $("#store").hover(function() {
    $('#storedropdown').stop(true, false).slideDown('slow');
  }, function() {
    $('#storedropdown').stop(true, false).slideUp('slow');
  });
  
  $("#title").animate({
    
  });
//   var navHeight = $( window ).height() - 70;
  
  
//     $(window).bind('scroll', function() {
//         if ($(window).scrollTop() > navHeight) {
// 				  $('#menu').addClass('fixed');
// 		    }
		    
//         else {
//   			  $('#menu').removeClass('fixed');
//         }
        
//     });

});

var el = document.getElementById("div1");

function fadeIn(el) {
  el.style.opacity = 0;


  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.01;


    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

fadeIn(el);


