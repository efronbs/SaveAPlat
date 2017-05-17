app.controller('MainController', ['$scope', function($scope) {

  $scope.posts = [
    {
      icon : '..\\..\\img\\cheeseplatter.png',
      title : 'Cheese Platter',
      address: 'Apartments West, Terre Haute, IN',
      room: '150',
      phone: '555-555-5555',
      description: 'We couldn\'t finish the cheese, and it will come bad soon. Stop by between 5.00 and 8.00 pm to pick it up. First come, first serve!',
      ingredients: 'nondairy cheese, olives, pickles, soy pepperoni, wine'
    },
    {
      icon : '..\\..\\img\\curry.jpg',
      title : 'Curry with Rice and Naan',
      address: 'Mees Hall, Rose Hulman Institute Rd, Terre Haute, IN 47803',
      room: '150',
      phone: '555-555-5555',
      description: 'We ordered too much Indian food so come by  anytime between 3pm to 5pm to pick it up!',
      ingredients: 'Basmati Rice, Whole Wheat Flour, potatoes, chickpeas, cauliflower, garlic, and curry spices'
    },
    {
      icon : '..\\..\\img\\ramen.jpg',
      title : 'Ramen',
      address: 'Deming Hall, Terre Haute, IN 47803',
      room: '150',
      phone: '555-555-5555',
      description: 'I have a lot of ramen broth and ingredients leftover from a get together so feel free to get it after 7pm',
      ingredients: 'vegetable broth, flour, leeks, seaweed, bamboo shoots, bean sprouts, and sesame seeds'
    },
    {
      icon : '..\\..\\img\\dumplings.png',
      title : 'Dumplings',
      address: 'BSB Hall, Rose Hulman Institute Road, Terre Haute, IN',
      room: '150',
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
    $scope.addItem = function() {
      var image = document.getElementById("image");
      var title = document.getElementById("title");
      var building = document.getElementById("building");
      var room = document.getElementById("room");
      var phone = document.getElementById("phone");
      var description = document.getElementById("description");

      if (image == null || image.value === "") {return;}
      if (title == null || title.value === "") {return;}
      if (building == null || building.value === "" || !(building.value in shortToLocation)) {return;}
      if (room == null || room.value === "") {return;}
      if (phone == null || phone.value === "") {return;}
      if (description == null || description.value === "") {return;}

      var newItem = {}
      newItem["icon"] = image.value;
      newItem["title"] = title.value;
      newItem["address"] = shortToLocation[building.value];
      newItem["room"] = room.value;
      newItem["phone"] = phone.value;
      newItem["description"] = description.value;
      newItem["ingredients"] = "temp";

      $scope.posts.push(newItem);
    }

  $scope.init();
}]);
