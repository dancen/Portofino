
/**
 * Description of tableController.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {



    // module
    var tableController = angular.module('tableController', []);
    
    
    /**
     * TableController 
     * manage angular methods in the partial view tables.html
     *
     * @requires "$scope", "ServiceFactory", "CostantsFactory", "UtilFactory"
     * @param  $scope, ServiceFactory, CostantsFactory, UtilFactory
     * @return void
     *     
     */ 

    tableController.controller("TableController", [
        "$scope",
        "ServiceFactory",
        "CostantsFactory",        
        "UtilFactory",
        function ($scope,
                ServiceFactory,
                CostantsFactory,
                UtilFactory) {


             // calculate the total amount of the current table
            $scope.calculateTotalAmountTable = function (data) {

                $scope.getModel().setTotalAmountTable(UtilFactory.CalculateTotalAmount().getTotal(data));
            };
            
            
            
             /**
             *  the method showTable executed a rest calls
             *  to the server in order to retrieve table details data
             *  table data shows the current orders and related status 
             *  the method redirect to the orders view page
             */

            $scope.showTable = function (table) {


                // start loader
                $scope.startLoader();
                $scope.getModel().setRender(false);

                // load the single table data from the server
                var call = ServiceFactory.TableService().getData(table);
                call.success(function (data) {

                    if (data !== null) {
                        
                        $scope.getModel().setTable(data);
                        $scope.getModel().setCurrentTable(table);
                        $scope.calculateTotalAmountTable(data);


                    } else {

                        $scope.getModel().setTable(null);
                        $scope.getModel().setCurrentTable(table);
                        $scope.getModel().setTotalAmountTable(0);

                    }

                    $scope.getModel().setRender(true);

                }).error(function (data) {
                    return false;
                });

                // go to anchor
                $scope.gotoAnchor("orders");


            };



            /**
             *  the method showStatus draw the status string
             *  to the tables details panel view and show 
             *  waiting time when the status is WAITING
             */

            $scope.showStatus = function (status, updated_at) {

                if (updated_at) {

                    // get minutes from date string
                    var s = parseInt(updated_at.substring(14, 16));

                    // get current minutes
                    var d = new Date();
                    var n = parseInt(d.getMinutes());

                    // calculate the delta
                    if (n < s) {
                        n = (60 + n);
                    }
                    var minutes = parseInt(n) - parseInt(s);


                    if (status === CostantsFactory.statusWaiting()) {
                        $scope.getModel().setWaitingTimeLabel(" <span class='glyphicon glyphicon-time'></span> " + minutes + " min.");
                        return status;
                    } else {
                        $scope.getModel().setWaitingTimeLabel(null);
                        return status;
                    }

                }

            };
            
            



        }]);





})();