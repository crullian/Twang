var app = angular.module('Twang', ['fsaCountWords']);

app.factory('GetTweetsFactory', function($http) {
  return {
    getTweets: function(handle) {
      var queryStringParams = {};
      if(handle){
        queryStringParams.handle = handle;
      }
      return $http.get('/tweets', {params: queryStringParams}).then(function(response) { //how do you know when you'll get a promise back?
        return response.data;
      });
    }
  };
});

app.controller('GetTweetsController', function($scope, GetTweetsFactory, countWords) {
  $scope.search = {};
  $scope.getTweets = function(handle) {
    $scope.analyzedWords = [];
    GetTweetsFactory.getTweets(handle).then(function(tweets) {
      $scope.tweets = tweets;
    });
  };
  $scope.analyzeTweets = function(tweets) {
    var tweetText = tweets.map(function(tweet) {
      return tweet.text;
    });
    var allTweetTexts = tweetText.join(' ');

    $scope.analyzedWords = countWords(allTweetTexts);
  };
});