app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil',
        price: 4.95
        }
    ];
    $scope.mains=[
      {
       name: 'pizza',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    },
    {
       name: 'juices',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    },
    {
       name: 'donuts',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    },
  ]
    $scope.extras=[
      {
       name: 'cookies',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    },
    {
       name: 'cheeze its',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    },
    {
       name: 'snaks',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    }, 
  ]
  }]);