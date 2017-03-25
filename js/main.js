// smooth scrolling: anchor point
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 78
        }, 500);
        return false;
      }
    }
  });
  $('.logo').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
  $('.about-scroll').click(function () {
    $('html,body').animate({
      scrollTop: 400
    }, 1000);
  });



  // items
  $(".item-list").flickity({
    cellAlign: 'center',
    contain: true,
    percentPosition: true,
    imagesLoaded: true,
    autoPlay: true,
    prevNextButtons: false
  });


  // cart button
  var $cartTotal = 0;
  $('.counter').hide();
  $('.button').on('click', function (event) {
    event.preventDefault();
    $cartTotal++;
    $('.counter').text($cartTotal).show();
    console.log('.counter');
  });


  // email button: '#submit=button ID'
  $('#submit').on('click', function (event) {
    event.preventDefault();
    var userEmail = $('input:text').val();
    if (userEmail != '') {
      var valid = validateEmail(userEmail);
      if (valid) {
        alert("Thanks for subscribing!");
      } else {
        alert("Please include an '@' in email address. " + userEmail + " is missing an '@'.");
      }
    } else {
      alert("Please submit a valid email address.");
    }
  });

  //email
  function validateEmail(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }
});