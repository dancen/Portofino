/**
 * Description of mainService.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function() {




// MODULE TO MANAGE SERVICES
    var mainService = angular.module('mainService', [])
                .constant('AUTH_RESOURCE', "http://localhost/portofinoApi/web/app_dev.php/restlogin")
                .constant('TABLES_RESOURCE', "http://localhost/portofinoApi/web/app_dev.php/tables")
                .constant('ORDERS_RESOURCE', "http://localhost/portofinoApi/web/app_dev.php/orders/table/")
                .constant('TABLE_RESOURCE', "http://localhost/portofinoApi/web/app_dev.php/table/")
                .constant('ORDER_RESOURCE', "http://localhost/portofinoApi/web/app_dev.php/order/");
                
        


    /**
     * AuthService() 
     * rest web service
     *
     * @requires "$http", "AUTH_RESOURCE"
     * @param  $http, AUTH_RESOURCE
     * @return ajax object
     * 
     */

    mainService.service("AuthService", [
        "$http",
        "AUTH_RESOURCE",
            function($http,
                     AUTH_RESOURCE){

            var service = this;

            service.authenticate = function(username, password) {
                
                console.log(username);
                
                return $http.post(AUTH_RESOURCE,  {
                        usr: username,
                        pwd: password
                    });
                    
                //return $http.get(AUTH_RESOURCE+"?usr="+username+"&pwd="+password);
            }

        }]);

    /**
     * TablesService() 
     * rest web service
     *
     * @requires "$http", "TABLES_RESOURCE"
     * @param  $http, TABLES_RESOURCE
     * @return ajax object
     */

    mainService.service("TablesService", [
        "$http",
        "TABLES_RESOURCE",
            function($http,
                     TABLES_RESOURCE) {

            var service = this;

            service.getData = function() {

                return $http.get(TABLES_RESOURCE);

            };


        }]);

    /**
     * TableService() 
     * rest web service
     *
     * @requires "$http", "ORDERS_RESOURCE"
     * @param  $http, ORDERS_RESOURCE
     * @return ajax object
     */

    mainService.service("TableService", [
        "$http",
        "ORDERS_RESOURCE",
            function($http,
                     ORDERS_RESOURCE) {

            var service = this;

            service.getData = function(id) {
                
                return $http.get(ORDERS_RESOURCE + '' + id);

            };

        }]);


    /**
     * OrderService() 
     * rest web service
     *
     * @requires "$http", "ORDER_RESOURCE"
     * @param  $http, ORDER_RESOURCE
     * @return ajax object
     */

    mainService.service("OrderService", [
        "$http",
        "ORDER_RESOURCE",
            function($http,
                     ORDER_RESOURCE) {

            var service = this;
            service.saveOrder = function(waiter, table, item, quantity, amount) {

                
                return $http.post(ORDER_RESOURCE + 'update', {
                    waiter: waiter,
                    table: table,
                    item: item,
                    quantity: quantity,
                    amount: amount
                });

                  //return $http.get(ORDER_RESOURCE+"update?waiter="+waiter+"&table="+table+"&item="+item+"&quantity="+quantity+"&amount="+amount);



            };

        }]);


    /**
     * ServeService() 
     * rest web service
     *
     * @requires "$http", "TABLE_RESOURCE"
     * @param  $http, TABLE_RESOURCE
     * @return ajax object
     */

    mainService.service("ServeService", [
        "$http",
        "TABLE_RESOURCE",
            function($http,
                     TABLE_RESOURCE) {

            var service = this;
            service.setServed = function(table, waiter) {

                return $http.post(TABLE_RESOURCE + 'served', {
                    table: table,
                    waiter: waiter
                });

                //return $http.get(TABLE_RESOURCE+"served?table="+table+"&waiter="+waiter);

            };

        }]);



    /**
     * CloseTableService() 
     * rest web service
     *
     * @requires "$http", "TABLE_RESOURCE"
     * @param  $http, TABLE_RESOURCE
     * @return ajax object
     */

    mainService.service("CloseTableService", [
        "$http",
        "TABLE_RESOURCE",
            function($http,
                     TABLE_RESOURCE) {

            var service = this;
            service.closeServed = function(table, waiter) {

                return $http.post(TABLE_RESOURCE + 'close', {
                    table: table,
                    waiter: waiter
                });
                
                //return $http.get(TABLE_RESOURCE+"close?table="+table+"&waiter="+waiter);

            };

        }]);







})();