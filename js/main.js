

// email button
$(function() {
  $('#submit').click(function(event) {
   event.preventDefault();
    
   var email = $("#email").val();

   if (email == '' ) {
      alert('You missed the field.');
   } else {
      alert('Thanks for filling the field!');
   }
 });
});




// smooth scrolling: anchor point
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


// cart button
// $(function(){

//   $(".item-list button").on('click',function(event){
//     event.preventDefault();
//       var  circle = $('counter')

//      if ($(this).is('click'){
//       $('').show(); 
//       ;
//    } else {
//       $(circle).hide();
//    }
//   });
// });





