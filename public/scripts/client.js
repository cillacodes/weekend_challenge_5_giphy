var app = angular.module('giphyApp', []);

app.controller('GiphyController', function(GiphyService) {
  console.log('GiphyController loaded');

  var ctrl = this;
  ctrl.gifPic = [];

  ctrl.getRandomGif = function() {
    // console.log("randomGif", gif);
    GiphyService.getRandomGif().then(function(gifUrl) {
      ctrl.randomGifUrl = gifUrl.image_url;
      ctrl.imageAlt = gifUrl.url;
      console.log(gifUrl);
    });
  };


  ctrl.searchGif = function(searchTerm) {
    GiphyService.searchGif(searchTerm).then(function(gifs) {
      ctrl.gifPic = gifs;
    });

  }; //end.controller
});
