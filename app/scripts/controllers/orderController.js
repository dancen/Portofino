
/**
 * Description of controllers.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {



    // module
    var orderController = angular.module('orderController', []);
    
    
     /**
     * OrderController 
     * manage angular methods in the partial view neworder.html
     *
     * @requires "$scope", "ServiceFactory", "UtilFactory"
     * @param  $scope, ServiceFactory, UtilFactory
     * @return void
     *     
     */ 

    orderController.controller("OrderController", [
        "$scope",
        "ServiceFactory",
        "UtilFactory",
        function ($scope,
                ServiceFactory,
                UtilFactory) {




            // update the total amount
            $scope.updateTotalAmount = function () {

                $scope.getModel().setTotalAmount(UtilFactory.UpdateTotalAmount().getTotal($scope.getModel().getCurrentOrder()));
            };



            /**
             *  the method addOrder add a order row to the panel
             *  without affecting the database.
             */

            $scope.addOrder = function () {

                if ($scope.getModel().getCurrentOrder().length < 1) {

                    // insert first item
                    var amount = $scope.getModel().getCurrentAmount() * $scope.getModel().getCurrentQuantity();
                    $scope.getModel().getCurrentOrder().push({item: $scope.getModel().getCurrentItem(), quantity: $scope.getModel().getCurrentQuantity(), amount: amount});

                } else {
                    var modified = false;
                    for (var i = 0; i < $scope.getModel().getCurrentOrder().length; i++) {

                        if ($scope.getModel().getCurrentOrder()[i]["item"] === $scope.getModel().getCurrentItem()) {

                            // modify quantity item
                            $scope.getModel().getCurrentOrder()[i]["quantity"] += $scope.getModel().getCurrentQuantity();
                            var amount = $scope.getModel().getCurrentAmount() * $scope.getModel().getCurrentOrder()[i]["quantity"];
                            $scope.getModel().getCurrentOrder()[i]["amount"] = amount;
                            modified = true;
                            break;
                        }

                    }

                    if (!modified) {

                        // insert new item
                        var amount = $scope.getModel().getCurrentAmount() * $scope.getModel().getCurrentQuantity();
                        $scope.getModel().setTotalAmount($scope.getModel().getTotalAmount() + amount);
                        $scope.getModel().getCurrentOrder().push({item: $scope.getModel().getCurrentItem(), quantity: $scope.getModel().getCurrentQuantity(), amount: amount});
                    }
                }

                // set current quantity
                $scope.getModel().setCurrentQuantity(1);

                // update total amount
                $scope.updateTotalAmount();


            };




            /**
             *  the method removeOrder remove the order from 
             *  the page view without affecting the database data
             *  avoiding useless ajax calling
             */

            $scope.removeOrder = function (item) {

                // remove item from the order
                for (var i = 0; i < $scope.getModel().getCurrentOrder().length; i++) {

                    if ($scope.getModel().getCurrentOrder()[i]["item"] === item) {

                        $scope.getModel().setTotalAmount($scope.getModel().getTotalAmount() - $scope.getModel().getCurrentOrder()[i]["amount"]);

                        $scope.getModel().getCurrentOrder().splice(i, 1);

                        break;
                    }
                }

            };



            /**
             *  the method saveOrder save the current order to db
             *  variable to false and notify to the application
             *  using $broadcast object. 
             */

            $scope.saveOrder = function () {

                $scope.getModel().setRender(false);

                // save a new order
                if ($scope.getModel().getCurrentOrder().length > 0) {

                    // start loader
                    $scope.startLoader();

                    for (var i = 0; i < $scope.getModel().getCurrentOrder().length; i++) {

                        // iterate saving data
                        var call = ServiceFactory.OrderService().saveOrder(
                                $scope.getModel().user.getName(),
                                $scope.getModel().getCurrentTable(),
                                $scope.getModel().getCurrentOrder()[i]["item"],
                                $scope.getModel().getCurrentOrder()[i]["quantity"],
                                $scope.getModel().getCurrentOrder()[i]["amount"]);

                        call.success(function (data) {

                            //reset to initial values
                            $scope.getModel().setCurrentOrder([]);
                            $scope.getModel().setTotalAmount(0);

                            // load tables data and redirect
                            $scope.loadTables();
                            $scope.getModel().setRender(true);

                        }).error(function (data) {

                            // go to anchor
                            $scope.gotoAnchor("tables");

                        });

                    }



                }


            };
            
            
            /**
             *  the method getProducts retur data
             *  to populate teh combo box
             */

           
                
                $scope.products = [
                    {name: "Pasta alla Carbonara", price: 6.50},
                    {name: "Linguine al Pesto", price: 7.50},
                    {name: "Bott. Vino Rosso", price: 10.50},
                    {name: "Caffe Espresso", price: 1.00},
                    {name: "Caffe Americano", price: 2.00}];
                
               







        }]);




})();