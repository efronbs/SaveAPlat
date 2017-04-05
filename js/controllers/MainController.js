app.controller('MainController', ['$scope', function($scope) {

  $scope.posts = [
    {
      icon : '..\\..\\img\\cheeseplatter.png',
      title : 'Cheese Platter',
      address: '8121 East Audrey Ave, Terre Haute, IN, 47803',
      phone: '555-555-5555',
      description: 'We couldn\'t finish the cheese, and it will come bad soon. Stop by between 5.00 and 8.00 pm to pick it up. First come, first serve!',
      ingredients: 'nondairy cheese, olives, pickles, soy pepperoni, wine'
    },
    {
      icon : '..\\..\\img\\curry.jpg',
      title : 'Curry with Rice and Naan',
      address: '2399 State Rd 46, Terre Haute, IN 47803',
      phone: '555-555-5555',
      description: 'We ordered too much Indian food so come by  anytime between 3pm to 5pm to pick it up!',
      ingredients: 'Basmati Rice, Whole Wheat Flour, potatoes, chickpeas, cauliflower, garlic, and curry spices'
    },
    {
      icon : '..\\..\\img\\ramen.jpg',
      title : 'Ramen',
      address: '5500 Wabash Ave, Terre Haute, IN 47803',
      phone: '555-555-5555',
      description: 'I have a lot of ramen broth and ingredients leftover from a get together so feel free to get it after 7pm',
      ingredients: 'vegetable broth, flour, leeks, seaweed, bamboo shoots, bean sprouts, and sesame seeds'
    },
    {
      icon : '..\\..\\img\\dumplings.png',
      title : 'Dumplings',
      address: '1353 Wabash Ave, Terre Haute, IN 47807',
      phone: '555-555-5555',
      description: 'Vegan dumplings from Din Tai Fung',
      ingredients: 'flour, cabbage, mushrooms, onions, carrots, and vegetable oil'
    }
  ];
    $scope.init = function() {
      var initAddresses = [];
      for (var i = 0; i < $scope.posts.length; i++){
        initAddresses.push($scope.posts[i]["address"]);
      }
      populateAddresses(initAddresses);
    };

  $scope.init();
}]);
