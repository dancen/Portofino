
/**
 * Description of mainController.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {



    // module
    var mainController = angular.module('mainController', []);

    /**
     * MainController
     * manage common functionalities
     *
     * @requires "AppFactory", "$scope", "forcedTimeoutLoader", "ServiceFactory", "AppModel"
     * @param AppFactory, $scope, forcedTimeoutLoader, ServiceFactory, AppModel
     * @return void
     */

    mainController.controller("MainController", [
        "AppFactory",
        "$scope",
        "forcedTimeoutLoader",        
        "ServiceFactory",
        "AppModel",
        function (
                AppFactory,
                $scope,
                forcedTimeoutLoader,
                ServiceFactory,
                AppModel) {

            

            /**
             *  the scope model is managed by the main factory AppModel
             *  to keep all data access in a sigle object, to use in
             *  the shared scope environment between parent / child controllers
             *  the initModel() method is loaded in the body html tag of the SPA
             *  
             */
            
            // return the applicaion model
            
            $scope.getModel = function () {                
                return $scope.model;
            };            
                   
            var model = AppModel;
            
            $scope.initModel = function () {                  
               
               model.setUser(new Object());
               model.setLogged(false);
               model.setRender(false);
               model.setCurrentOrder([]);
               model.setTotalAmount(0);
               model.setTotalAmountTable(0);
               model.setTables(null);
               $scope.model = model; 
               
            };            
            
            

            // fake data for demo purpose
            $scope.usr = "daniele.centamore@gmail.com";
            $scope.pwd = "YHSTTtt88";
                     
                     
           // spinner loader boolean 
            $scope.isLoading = false;          

            /**
             *  start the spinner loader
             *              
             */

            $scope.startLoader = function () {
                $scope.isLoading = true;
            };



            /**
             *  stop the spinner loader
             *              
             */

            $scope.stopLoader = function () {
                $scope.isLoading = false;
            };
            
            



            /**
             *  the method loadSpinner start the loader and
             *  redirect the view to the specified anchor
             */

            $scope.loadSpinner = function (element, b) {
                // start loader
                $scope.startLoader();

                // scroll the page to the Panel
                $scope.gotoAnchor(element);

                // close the lateral menu
                if (b) {
                    angular.element('#menu-close').trigger('click');
                }
            };



            $scope.gotoAnchor = function (x) {

                // scroll to section
                AppFactory.anchorScroll()(x);
                console.log("scrolling to section "+x);

                // stop the loader
                AppFactory.timeout()($scope.stopLoader, forcedTimeoutLoader);
            };



            /**
             *  force the view data scope refresh
             *  calling $digest method
             */

            $scope.refresh = function () {

                AppFactory.timeout()(function () {
                    $scope.$digest();
                }, 0);

            };



            /**
             *  the method order redirect the application to the  
             *  new order page and set the current table and the
             *  current status variable using the $broadcast object.
             */

            $scope.order = function (table) {

                // start loader
                $scope.startLoader();

                // scroll the page to the new order Panel
                $scope.gotoAnchor("order");

                // set the current table
                $scope.getModel().setCurrentTable(table.id);
                $scope.getModel().setCurrentStatus(table.status);

            };
            
            
            
            /**
             *  the method loadTables executed a rest calls
             *  to the server in order to retrieve tables data
             *  tables data show the tables status and the waiting 
             *  time of the last order. if the rest call return success
             *  the variable scope.tables is updated via event calling
             */

            $scope.loadTables = function () {

                
                $scope.getModel().setRender(false);

                // start loader
                $scope.startLoader();

                // load tables data from the server
                var call = ServiceFactory.TablesService().getData();
                call.success(function (data) {
                   
                    $scope.getModel().setTables(data.tables);
                     console.log("tables loaded "+ $scope.getModel().getTables().length);
                    
                    // go to anchor
                    $scope.gotoAnchor("tables");
                    $scope.getModel().setRender(true);


                }).error(function (data) {
                    return null;
                });


            };
            
            


        }]);


})();