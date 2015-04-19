
/**
 * Description of loginController.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {


    // module
    var loginController = angular.module('loginController', []);

    /**
     * LoginController 
     * manage angular methods in the partial view login.html
     *
     * @requires "AppFactory", "$scope", "ServiceFactory"
     * @param AppFactory, $scope, ServiceFactory
     * @return void
     *     
     */ 

    loginController.controller("LoginController", [
        "AppFactory",
        "$scope",
        "ServiceFactory",
        function (AppFactory,
                $scope,
                ServiceFactory) {


            /**
             *  the method logout set the scope.logged  
             *  scope.render parent variable to false
             *  set visible and scrollto the starting page
             */

            $scope.logout = function () {
                // start loader
                $scope.startLoader();
                $scope.getModel().setLogged(false);
                $scope.getModel().setRender(false);
                $scope.getModel().setUser(null);
            };

            /**
             *  the method auth executed a rest calls
             *  to the server in order to authenticate the user
             *  the returned value create a User object instance
             *  the instance is saved in the parent scope.user object
             */

            $scope.auth = function () {

                

                // start loader
                $scope.startLoader();
                $scope.getModel().setRender(false);

                if ($scope.usr.trim() !== "" && $scope.pwd.trim() !== "") {

                    var call = ServiceFactory.AuthService().authenticate($scope.usr, $scope.pwd);
                    call.success(function (data) {
                        
                        console.log(data.response);

                        if (data.response === "success") {

                            // instantiatings state object
                            var loginstate = AppFactory.LoginFactory().createLogin();

                            // set user object data
                            loginstate.init(data.email, data.name, data.role, data.login_time);

                            // set the user to the shared scope
                            $scope.getModel().setLogged(true);
                            $scope.getModel().setUser(loginstate.getUser());
                            $scope.getModel().setRender(true);
                            
                          
                            console.log($scope.getModel().getUser().getName());
                            

                            // scroll the page to the new Panel
                            $scope.gotoAnchor("control-panel");

                        } else {

                           
                            // set the form errors
                            $scope.getModel().setErrors("Bad Credentals!");

                            // scroll the page to the new Panel
                            $scope.gotoAnchor("login");
                        }


                    }).error(function (data) {

                        // set the server errors
                        $scope.getModel().setErrors("Server Error!");
                    });

                } else {

                    // set the input errors
                    $scope.getModel().setErrors("Username or Password cannot be blank");
                }

            };


        }]);



})();