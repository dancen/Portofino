
/**
 * Description of ordersController.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {



    // module
    var ordersController = angular.module('ordersController', []);


    /**
     * OrdersController 
     * manage angular methods in the partial view orders.html
     *
     * @requires "$scope", "ServiceFactory", "CostantsFactory"
     * @param  $scope, ServiceFactory, CostantsFactory
     * @return void
     *     
     */ 

    ordersController.controller("OrdersController", [
        "$scope",
        "ServiceFactory",
        "CostantsFactory",
        function ($scope,
                ServiceFactory,
                CostantsFactory) {




            /**
             *  the method closeTable set the SERVED status to db
             *  and notify to the application using $broadcast object.
             */

            $scope.servedTable = function () {

                // start loader
                $scope.startLoader();
                $scope.getModel().setRender(false);

                var call = ServiceFactory.ServeService().setServed($scope.getModel().getCurrentTable(), $scope.getModel().getUser().getName());
                call.success(function (data) {

                    $scope.getModel().setCurrentStatus(CostantsFactory.statusServed());

                    // load tables data
                    $scope.loadTables();
                    $scope.getModel().setRender(true);


                }).error(function (data) {

                    // go to anchor
                    $scope.gotoAnchor("tables");

                });


            };



            /**
             *  the method closeTable set the CLOSED status to db
             *  and notify to the application using $broadcast object.
             */

            $scope.closeTable = function () {

                // start loader
                $scope.startLoader();
                $scope.getModel().setRender(false);

                var call = ServiceFactory.CloseTableService().closeServed($scope.getModel().getCurrentTable(), $scope.getModel().getUser().getName());
                call.success(function (data) {


                    $scope.getModel().setCurrentStatus(CostantsFactory.statusClosed());

                    // load tables data
                    $scope.loadTables();
                    $scope.getModel().setRender(true);


                }).error(function (data) {

                    // go to anchor
                    $scope.gotoAnchor("tables");

                });

            };






        }]);




})();