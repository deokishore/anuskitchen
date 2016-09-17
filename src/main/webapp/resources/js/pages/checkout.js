function CheckoutController($scope, $http, $rootScope, $window) {

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
        $scope.emailExist = false;


	$rootScope.uShoppingCart = function (shoppingCartLineItem) {

            for (var i=0; i<$rootScope.shoppingCart.lineItems.length; i++) {
              if (shoppingCartLineItem.productVo.productId === $rootScope.shoppingCart.lineItems[i].productVo.productId) {
                   $rootScope.shoppingCart.lineItems[i].quantity =  shoppingCartLineItem.quantity;
                   $rootScope.shoppingCart.lineItems[i].totalCost = shoppingCartLineItem.quantity * $rootScope.shoppingCart.lineItems[i].productVo.priceVo.amount;
              }
            }
    };

    $scope.removeProductFromCart = function (shoppingCartLineItem) {
        for (var i=0; i<$rootScope.shoppingCart.lineItems.length; i++) {
              if (shoppingCartLineItem.productVo.productId === $rootScope.shoppingCart.lineItems[i].productVo.productId) {
                   var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
                   $scope.formData = { "productVo" : shoppingCartLineItem.productVo};
                   var url = "/removeProductFromCart";
                   var response = $http.post(url, $scope.formData);
                   response.success(function(data, status, headers, config) {
                        $rootScope.shoppingCart.lineItems.splice(i, 1);
                        $rootScope.shoppingCart = data;
                   });
                   response.error(function(data, status, headers, config) {
                        alert( "Exception details: " + JSON.stringify({data: data}));
                   });
                   break;
              }
        }
        $rootScope.shoppingCart = $rootScope.shoppingCart;
    };


    $scope.checkout = function(){
        $http.get("/cartItems").success(function(data) {
                $scope.response = data;
        });
    };

    $scope.getCustomerVo = function(){
        $http.get("/checkout/getCustomerVo").success(function(data) {
              $scope.customerVo = data;
        });
    };


    // Create new Customer Start
        $scope.createNewOrderForExistingCustomer = function (shoppingCart) {

            var url = '/checkout/createNewOrderForExistingCustomer';
            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
            var response = $http.post(url, shoppingCart);

            response.success(function(data, status, headers, config) {
                $rootScope.shoppingCart = data;
                $window.location.href = "/checkout/billingDeliveryInfo";
            });

            response.error(function(data, status, headers, config) {
                 alert( "Exception details: " + JSON.stringify({data: data}));
            });

        };
        // Create new Customer End


    // Create new Customer Start
    $scope.createNewOrder = function (shoppingCart) {

        var url = "";
        if($rootScope.shoppingCart.loginResponse.status == 'OK') {
            url = '/checkout/createNewOrderForExistingCustomer';
            alert(" Existing ");
        }

        if($rootScope.shoppingCart.loginResponse.status != 'OK'){
            url = '/checkout/createNewOrder';
        }

        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
        var response = $http.post(url, shoppingCart);

        response.success(function(data, status, headers, config) {
            $rootScope.shoppingCart = data;

            if( $rootScope.shoppingCart.loginResponse.emailExist && $rootScope.shoppingCart.loginResponse.status != 'OK'){
                $scope.emailExist = true;
                $window.scrollTo(0, 700);
                return;
            } else {
                $window.location.href = "/checkout/billingDeliveryInfo";
            }
        });

        response.error(function(data, status, headers, config) {
             alert( "Exception details: " + JSON.stringify({data: data}));
        });

    };
    // Create new Customer End

    // Create new Delivery Address Start
    $scope.deliveryAddressVo = {}
    $scope.createDeliveryAddress = function () {
            var url = '/checkout/createDeliveryAddress';
            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};

            $http.post(url, $.param($scope.deliveryAddressVo), config)
                .success(function (data) {
                     $window.location.href = "/checkout/billingDeliveryInfo";
            })
            .error(function(data, status, headers, config) {
                alert("Fail createDeliveryAddress");
        });
    };
    // Create new Delivery Address End


    // Update Delivery Customer Start
    $scope.updateDeliveryCustomer = function () {
        var url = '/checkout/updateDeliveryCustomer';
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};

         var response = $http.post(url, $rootScope.shoppingCart);
             response.success(function(data, status, headers, config) {
                $rootScope.shoppingCart = data;
                $scope.bilDelCheckboxModel.value = true;
                $scope.deliveryAddressModel.value = false;
                $window.scrollTo(0, 500);

             });
             response.error(function(data, status, headers, config) {
                 alert("Fail updateDeliveryCustomer");
         });
    };
    // Update Delivery Customer End



    // Create new Delivery Address Start

     $scope.updateBillingCustomer = function () {
        var url = '/checkout/updateBillingCustomer';
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
        var response = $http.post(url, $rootScope.shoppingCart);
         response.success(function(data, status, headers, config) {
               $rootScope.shoppingCart = data;
               $scope.addEditBillingAddressModel.value = false;
               $scope.billingAddressDisplayModel.value = true;
               $scope.bilDelCheckboxModel.value = false;
               $window.scrollTo(0, 1200);
         });
         response.error(function(data, status, headers, config) {
             alert( "Exception details: " + JSON.stringify({data: data}));
         });
     };
    // Create new Delivery Address End

   // Get checkout data Start
   $scope.getCheckout = function() {
        var url = "/viewCart";
        $http.get(url)
            .success(function (data) {
               $rootScope.shoppingCart = data;

//               if ($rootScope.shoppingCart.loginResponse.status === 'OK') {
//                 $scope.billingAddressDisplayModel.value = true;
//               }

               if ($rootScope.shoppingCart.lineItems.length === 0) {
                 $scope.continueToPostageOptionsButtonModel.value = false;
               }


            })
            .error(function(data, status, headers) {
                $scope.handleErrorInDialogs(status);
        });
    };
    // Get checkout data Start

    // Get checkout data Start
       $scope.clearOutShoppingCart = function() {
            var url = "/checkout/clearOutShoppingCart";
            $http.get(url)
                .success(function (data) {
                   $rootScope.shoppingCart = data;
                })
                .error(function(data, status, headers) {
                    $scope.handleErrorInDialogs(status);
            });
       };
    // Get checkout data Start


     $scope.handleDelvBilngCheckBox = function () {
          if($scope.bilDelCheckboxModel.value) {
            $scope.addEditBillingAddressModel.value = false;

            var url = '/checkout/createDeliveryToBillingAddress';
            var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};

            var response = $http.post(url, $rootScope.shoppingCart);
             response.success(function(data, status, headers, config) {
                   $rootScope.checkOut = data;
                   $scope.addEditBillingAddressModel.value = false;
                   $scope.billingAddressDisplayModel.value = false;
                   $scope.bilDelCheckboxModel.value = true;
                   $window.scrollTo(0, 1200);
             });
             response.error(function(data, status, headers, config) {
                 alert( "Exception details: " + JSON.stringify({data: data}));
             });
          } else {
            $scope.addEditBillingAddressModel.value = true;
            var url = '/checkout/deleteBillingCustomer';
            $http({
                  method: 'DELETE',
                  url: url
              }).success(function (data) {
                    $rootScope.shoppingCart = data;
                    $scope.billingAddressDisplayModel.value = false;
                    $scope.bilDelCheckboxModel.value = false;
                    $scope.billingAddressFinishedModel.value = false
                    $window.scrollTo(0, 700);
                  }).error(function(data, status, headers, config) {
                      alert(" Delete Error : ");
              });
          }


     };

    // **** shipper list Start
    $scope.getShipperList = function () {

        var url = '/checkout/getShipperList';
        var config = {};
        $http.get(url, config)
            .success(function (data) {
                $scope.shipperList = data
            })
            .error(function () {
                $scope.state = 'error';
            });
    };
    // **** shipper list End

    $scope.shipperId = '';
    $scope.setShipperId = function(value) {
       $scope.shipperId = value;
    };

    $scope.setShipperValue = function () {

         for(var i = 0; i < $scope.shipperList.length; i++){
             var shipperVo = $scope.shipperList[i];
             if(shipperVo.shipperId == $scope.shoppingCart.orderVo.shipperVo.shipperId){
                 var url = '/checkout/setShipper';
                 var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
                 $rootScope.shoppingCart.orderVo.shipperVo = shipperVo;

                 var response = $http.post(url, $rootScope.shoppingCart);

                  response.success(function(data, status, headers, config) {
                        $window.location='/checkout/paymentMethod';
                  });

                  response.error(function(data, status, headers, config) {
                      alert( "Exception details: " + JSON.stringify({data: data}));
                  });

             }
         }
    };

   $scope.validatePaymentMethod = function () {
        var url = '/checkout/validatePaymentMethod';
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
        var response = $http.post(url, $rootScope.shoppingCart);
        response.success(function(data, status, headers, config) {
               $window.location='/checkout/reviewAndOrder';
        });
        response.error(function(data, status, headers, config) {
             alert( "Exception details: " + JSON.stringify({data: data}));
        });
   };

   $scope.payAndCompleteOrder = function () {
        var url = '/checkout/validatePaymentMethod';
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
        var response = $http.post(url, shipperVo);
          response.success(function(data, status, headers, config) {
                $window.location='/checkout/reviewAndOrder';
        });
        response.error(function(data, status, headers, config) {
              alert( "Exception details: " + JSON.stringify({data: data}));
        });
   };

    $scope.editDeliveryAddress = function () {
        $window.scrollTo(0, 1200)
        $scope.deliveryAddressModel.value = true;
    }

    $scope.editBillingAddress = function () {
        $window.scrollTo(0, 1200)
        $scope.addEditBillingAddressModel.value = true;
    }

    $scope.addEditBillingAddressModel = function () {
        value = false;
    }

    $scope.editDeliveryAddressModel = function () {
        value = false;
    }

    $scope.cancelBillingAddSaving = function () {
        $window.scrollTo(0, 100);
        bilDelCheckboxModel.value = true ;
    }

    $scope.isEmpty = function (obj) {
        for (var i in obj) if (obj.hasOwnProperty(i)) return false;
        return true;
    };

    $scope.bilDelCheckboxModel = {
        value : true,
    };

    $scope.billingAddressDisplayModel = {
        value : false,
    };

    $scope.deliveryAddressModel = {
            value : false,
    };

    $scope.billingAddressFinishedModel = {
            value : false,
    };

    $scope.continueToPostageOptionsButtonModel = {
         value : true,
    };

    $scope.checkoutButton = function() {
        $http.get("/cartItems").success(function(data) {
                        $scope.response = data;
        });
    };




}