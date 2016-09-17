function ShoppingCartController($scope, $http, $rootScope) {

        $scope.pageToGet = 0;
        $scope.state = 'busy';
        $scope.lastAction = '';
        $scope.url = "/products";

        $scope.errorOnSubmit = false;
        $scope.errorIllegalAccess = false;
        $scope.displayMessageToUser = false;
        $scope.displayValidationError = false;
        $scope.displaySearchMessage = false;
        $scope.displaySearchButton = false;
        $scope.displayCreateContactButton = false;

        // **** cart display Start
       $scope.viewShoppingCart = function() {
            $scope.lastAction = 'search';
            var url = "/viewCart";
            var config = {};
            $http.get(url, config)
                .success(function (data) {
                    $rootScope.shoppingCart = data;
                })
                .error(function(data, status, headers, config) {
                    alert(" Error in view shopping cart call :");
            });
        }
        // **** cart display End

}