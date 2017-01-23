

// $(function() {
//   $('#submit').click(function(event) {
//    event.preventDefault();
    
//    var email = $("#email").val();

//    if (email == '' ) {
//       alert('You missed the field.');
//    } else {
//       alert('Thanks for filling the field!');
//    }
//  });
// });



// smooth scrolling: anchor point
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -90
        }, 500);
        return false;
      }
    }
  });
});



// items
$(function(){
  $(".item-list").flickity({
    cellAlign: 'center',
    contain: true,
    percentPosition: true,
    imagesLoaded: true,
    autoPlay: true,
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


// email button: '#submit=button ID'
$('#submit').on('click', function(event) {
  event.preventDefault();
  var userEmail = $('input:text').val();
  if (userEmail != '') {
      var valid = validateEmail(userEmail);
      if (valid) {
        alert("Thanks for subscribing!");
      } else {
      alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
      }
      } else{
    alert ("Please submit a valid email address.");
  }
  
})

function validateEmail(email) {
 var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return pattern.test(email);
}



