app.service('GiphyService', function ($http) {

  var API = 'http://api.giphy.com/v1/gifs/';
  var giphyGetParams = {params: {api_key: 'dc6zaTOxFJmzC'}};


  this.getRandomGif = function() {
    console.log('Inside button click');
    return $http.get(API + 'random', giphyGetParams).then(function(response) {
      console.log('Got a reponse from the API', response);
      console.log(response.data.data.image_url);
    return response.data.data;
    }).catch(function(err) {
      console.log('Error getting info from API', err);
    });
  }; //end.getRandomGif

  this.searchGif = function(searchTerm) {
    giphyGetParams.params.q = searchTerm;
    console.log('Inside button click');
    return $http.get(API + 'search', giphyGetParams).then(function(response) {
      console.log('Got a search reponse from the API', response);
    return response.data.data;
    }).catch(function(err) {
      console.log('Error getting search info from API', err);
    });

  } //end.searchGif
}); //end app.service
