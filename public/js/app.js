$(document).ready(function() {

  /* Mansory */
  var $container = $('.mansory-container');
  $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector: '.mansory-item'
        });
    });

});