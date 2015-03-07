/* Mansory */
var container = document.querySelector('#mansory-container');
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
	msnry = new Masonry( container, {
		// options
	  	itemSelector: '.mansory-item'
  	});
});