
// $('#email-form').on('submit', function(event) {
//    event.preventDefault();
    

//    if ( $('.username').val() == '' ) {
//       alert('You missed the field.');
//    } else {
//       alert('Thanks for filling the field!');
//    }
// });

// anchor point
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});



// items
$(function(){

  $(".item-list").flickity({
      cellAlign: 'right',
    contain: true,
    percentPosition: false,
    imagesLoaded: true,
    // autoPlay: true,
    prevNextButtons: false
  });
});


// items
$(function(){

  $("..item-list button").on('click',function(event){
    event
  });
});





