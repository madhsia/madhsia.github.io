
$(document).ready(function () {

console.log(document.referrer.indexOf(window.location.hostname));

  var b = function($b,speed){
      beeWidth = $b.width();
      
      $b.delay(1000).animate({
          top:"4%"
      }, speed, function() {
        $('.hide').css("display", "block");
    });
  };

  $(function(){
      b($("#b"), 1000);
  });

    $('#container-single article').delay(2000).animate({
        left: '-490',
        easing: 'easeOutQuad'
    }, 500, function() {
        $('#hello').css("display", "block");
    });

});