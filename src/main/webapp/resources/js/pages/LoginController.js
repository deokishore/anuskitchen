
function LoginController($scope, $http, $location, $rootScope, $window) {
    $scope.customerVo = {};
    $scope.customerVo.email = '';
    $scope.customerVo.password = '';

    $scope.checkOutLogin = function(customerVo) {
        $scope.resetError();

        $http.post('accountLogin/authenticate', customerVo).success(function(login) {

            if(login.sessionId===null) {
                $scope.setError(login.status);
                return;
            }

            $scope.customerVo.email = '';
            $scope.customerVo.password = '';

            $rootScope.SessionId=login.sessionId;

            //$location.path("main");

            $window.location=login.pageToForward;

        }).error(function() {
            $scope.setError('Invalid user/password combination');
        });
    }

    $scope.accountLogin = function(customerVo) {
            $scope.resetError();

            $http.post('accountLogin/authenticate', customerVo).success(function(login) {

                if(login.sessionId===null) {
                    $scope.setError(login.status);
                    return;
                }

                $scope.customerVo.email = '';
                $scope.customerVo.password = '';

                $rootScope.SessionId=login.sessionId;

                //$location.path("main");
                $window.location=login.pageToForward;

            }).error(function() {
                $scope.setError('Invalid user/password combination');
            });
    }

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



    $scope.resetError = function() {
        $scope.error = false;
        $scope.errorMessage = '';
    }

    $scope.setError = function(message) {
        $scope.error = true;
        $scope.errorMessage = message;
        $rootScope.SessionId='';
    }
};