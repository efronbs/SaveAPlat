app.directive('foodInfo', function() {
  return {
    restrict: 'E',
    scope : {
      info : '='
    },
    templateUrl: 'js/directives/foodInfo.html',

    link: function(scope, element, attrs) {
      scope.hider = null;

      scope.enterCard = function($event) {
        var hider = $event.currentTarget.querySelector('#hider');
        if (hider != null) {
          scope.hider = hider;
        }
        hider.style.display = '';
      }

      scope.exitCard = function() {
        if (scope.hider != null) {
          scope.hider.style.display = 'none';
        }
      }

      scope.setMapLocation = function() {
        setPathToFood(scope.info.address);
      }

    }

  }
})
