$(document).ready(function() {

  /* Mansory */
  var $container = $('.mansory-container');
  $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector: '.mansory-item'
        });
    });

  /* FullCalendar */
  $('#calendar').fullCalendar({
      height: "auto"
  });

  $('#collapseAgenda').on('shown.bs.collapse', function () {
    $('#calendar').fullCalendar('today');
  });

});