function ProductsController($scope, $http, $rootScope) {

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

        //this will be available to all scope variables
        $rootScope.shoppingCart = "";
        $scope.searchForProduct = "";

        // **** product list Start
        $scope.getProductList = function () {
            var url = $scope.url;
            $scope.lastAction = 'list';
            var config = {params: {page: $scope.pageToGet}};
            $http.get(url, config)
                .success(function (data) {
                    $scope.productList = data.products;
                })
                .error(function () {
                    $scope.state = 'error';
                    $scope.displayCreateContactButton = false;
                });
        }
        $scope.getProductList();
        // **** product list End


       // **** product display Start
       $scope.searchProdcut = function(searchForProduct) {
            $scope.lastAction = 'search';
            var url = "/product?productId=" +  searchForProduct;
            var config = {};
            $http.get(url, config)
                .success(function (data) {
                    $scope.shoppingCartLineItem = data;
                })
                .error(function(data, status, headers, config) {
                    $scope.handleErrorInDialogs(status);
            });
       }
       // **** product display End

        $rootScope.getTotal = function(){
            var total = 0;

            if($rootScope.shoppingCart.lineItems != null) {
                for(var i = 0; i <  $rootScope.shoppingCart.lineItems.length; i++){
                  var productVo = $rootScope.shoppingCart.lineItems[i].productVo;
                  total += (productVo.priceVo.amount * $rootScope.shoppingCart.lineItems[i].quantity);
                 }
            }

            return total;
        }


        $scope.addProductToCart = function () {
            $rootScope.shoppingCartLineItem.productVo = $scope.productVo;
            $rootScope.shoppingCartLineItem.quantity =  $('#qty_box-1').val();
            $rootScope.shoppingCartLineItem.totalCost = $scope.productVo.priceVo.amount * $('#qty_box-1').val();

            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
            $scope.formData = { "shoppingCartLineItem" : $rootScope.shoppingCartLineItem};
            var url = "/addProductToCart";

            var response = $http.post(url, $scope.formData);

            response.success(function(data, status, headers, config) {
                $rootScope.shoppingCart = data;
            });

            response.error(function(data, status, headers, config) {
                alert( "Exception details: " + JSON.stringify({data: data}));
            });
        };

        $rootScope.updateShoppingCart2 = function (shoppingCartLineItem) {
            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
            var url = "/addProductQuantity";
            var response = $http.post(url, shoppingCartLineItem);
            response.success(function(data, status, headers, config) {
                $rootScope.shoppingCart = data;
            });

            response.error(function(data, status, headers, config) {
                alert( "Exception details: " + JSON.stringify({data: data}));
            });
        };


       $rootScope.updateShoppingCart = function (shoppingCartLineItem, plusMinus) {

           if(plusMinus === +1 ) {
                shoppingCartLineItem.quantity =  parseInt($('#qty_box-1').val()) + 1;
           }
            if(plusMinus === -1 ) {
                shoppingCartLineItem.quantity =  parseInt($('#qty_box-1').val()) - 1;
           }

           var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};

           var url = "/addProductQuantity";
           var response = $http.post(url, shoppingCartLineItem);

           response.success(function(data, status, headers, config) {
               $rootScope.shoppingCart = data;
           });

           response.error(function(data, status, headers, config) {
               alert( "Exception details: " + JSON.stringify({data: data}));
           });

       };


        // **** Add product to cart START
        $rootScope.addToCart = function() {

            var url = "/addProductToCart";
            var qty = $('#qty_box-1').val()

            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};

            $scope.shoppingCartLineItem.quantity = qty;
            $scope.shoppingCartLineItem.totalCost = $scope.shoppingCartLineItem.productVo.priceVo.amount * qty;

            var response = $http.post(url, $scope.shoppingCartLineItem);

            response.success(function(data, status, headers, config) {
                $rootScope.shoppingCart = data;
            });

            response.error(function(data, status, headers, config) {
                alert( "Exception details: " + JSON.stringify({data: data}));
            });

        };

        // **** Add product to cart END

        $scope.selectedContact = function (contact) {
            var selectedContact = angular.copy(contact);
            $scope.contact = selectedContact;
        }

        $scope.finishAjaxCallOnSuccess = function (data, modalId, isPagination) {
                $scope.populateTable(data);
                $("#loadingModal").modal('hide');

                if(!isPagination){
                    if(modalId){
                        $scope.exit(modalId);
                    }
                }

                $scope.lastAction = '';
        }


}