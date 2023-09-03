document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.parallax');
var instances = M.Parallax.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
        var options = {
      indicators: true, 
      numVisible: 1, 
      shift: 0, 
      padding: 0, 
      autoplay: true
    };
    var instances = M.Carousel.init(elems, options);
    function autoMoveCarousel() {
      var carouselInstance = M.Carousel.getInstance(elems[0]); 

      setInterval(function () {
        carouselInstance.next();
      }, 4000);
    }
    autoMoveCarousel();
    function autoMoveSecondCarousel() {
      var secondCarouselInstance = M.Carousel.getInstance(elems[1]);
      setInterval(function () {
        secondCarouselInstance.next();
      }, 4000);
    }

    autoMoveSecondCarousel();

    function autoMoveTCarousel() {
      var TCarouselInstance = M.Carousel.getInstance(elems[2]);
      setInterval(function () {
        TCarouselInstance.next();
      }, 4000);
    }

    autoMoveTCarousel();
  });
