app.directive('tweet', function() { 
  return { 
    restrict: 'E', 
    templateUrl: 'directives/tweet.html', // must put script path in head of html
    scope: {
      theTweet: "="
    }   
  }; 
});