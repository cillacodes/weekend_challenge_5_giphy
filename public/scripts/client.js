var app = angular.module('giphyApp', ['ngRoute']);

//configure favorites view
app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'GiphyController as gifCtrl'
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
    controller: 'FavoritesController as favCtrl'
  });
  //can get rid of #! in index.html
  $locationProvider.html5Mode(true);
}); //end app.config



app.controller('GiphyController', function(GiphyService) {
  console.log('GiphyController loaded');

var ctrl = this;

ctrl.getRandomGif = function() {
  // console.log("randomGif", gif);
  GiphyService.getRandomGif().then(function(gifUrl) {
    ctrl.randomGifUrl = gifUrl.image_url;
    ctrl.imageAlt = gifUrl.url;
    console.log(gifUrl);
    // ctrl.gifPic = [];
    // ctrl.gifPic.push({ gif_url: gifUrl.image_url });

  });
};

ctrl.searchGif = function(searchTerm) {
  GiphyService.searchGif(searchTerm).then(function(gifs) {
    ctrl.gifPic = gifs;
  });
};

}); //end.controller
