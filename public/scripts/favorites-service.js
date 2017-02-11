app.service('FavoritesService', function($http) {
  console.log('FavoritesService loaded');

  //post request to server
  this.saveFav = function(favorite) {
    return $http.post('/gif', favorite).catch(function(err) {
      console.log('Error saving favorites');
    });
  }; //end saveFav

  this.getFavs = function() {
    return $http.get('/gifs').then(function(response) {
      return response.data;
    }).catch(function(err) {
      console.log('Error getting favorites');
    });
  }


}); //end angular.module
