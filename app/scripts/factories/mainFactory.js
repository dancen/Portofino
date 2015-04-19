
/**
 * Description of mainFactory.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */



(function () {


    // module
    var mainFactory = angular.module('mainFactory', []);



/**
     * AppModel() 
     * manage the sharing scope data oblect
     * of the application
     *
     * @param 
     * @return object 
     */


    mainFactory.factory('AppModel', function () {

            function AppModel() {
                var current_item;
                var waiting_time_lable;
                var current_amount;
                var total_amount;
                var total_amount_table;
                var current_quantity;
                var current_status;
                var current_order;
                var current_table;
                var table;
                var logged;
                var user;
                var render;
                var tables;
                var errors;
            };
            
            
            AppModel.prototype.setCurrentItem = function (value) {
                this.current_item = value;
            };

            AppModel.prototype.setWaitingTimeLabel = function (value) {
                this.waiting_time_lable = value;
            };
            
            AppModel.prototype.getWaitingTimeLabel = function () {
                return this.waiting_time_lable;
            };

            AppModel.prototype.getCurrentItem = function () {
                return this.current_item;
            };

            AppModel.prototype.setCurrentAmount = function (value) {
                this.current_amount = value;
            };

            AppModel.prototype.getCurrentAmount = function () {
                return this.current_amount;
            };

            AppModel.prototype.setTotalAmount = function (value) {
                this.total_amount = value;
            };

            AppModel.prototype.getTotalAmount = function () {
                return this.total_amount;
            };

            AppModel.prototype.setTotalAmountTable = function (value) {
                this.total_amount_table = value;
            };
            
            AppModel.prototype.getTotalAmountTable = function () {
                return this.total_amount_table;
            };

            AppModel.prototype.setCurrentQuantity = function (value) {
                this.current_quantity = value;
            };

            AppModel.prototype.getCurrentQuantity = function () {
                return this.current_quantity;
            };

            AppModel.prototype.setCurrentStatus = function (value) {
                this.current_status = value;
            };

            AppModel.prototype.getCurrentStatus = function () {
                return this.current_status;
            };

            AppModel.prototype.getCurrentOrder = function () {
                return this.current_order;
            };

            AppModel.prototype.setCurrentOrder = function (value) {
                this.current_order = value;
            };
            
            AppModel.prototype.getCurrentOrder = function () {
                return this.current_order;
            };

            AppModel.prototype.setCurrentTable = function (value) {
                this.current_table = value;
            };

            AppModel.prototype.getCurrentTable = function () {
                return this.current_table;
            };

            AppModel.prototype.getTable = function () {
                return this.table;
            };

            AppModel.prototype.setTable = function (value) {
                this.table = value;
            };
            
            AppModel.prototype.setLogged = function (value) {
                this.logged = value;
            };
            
            AppModel.prototype.getLogged = function () {
                return this.logged;
            };
            
            AppModel.prototype.setUser = function (value) {
                this.user = value;
            };
            
            AppModel.prototype.getUser = function () {
                return this.user;
            };
            
            AppModel.prototype.setRender = function (value) {
                this.render = value;
            };
            
            AppModel.prototype.setErrors = function (value) {
                this.errors = value;
            };
            
            AppModel.prototype.setTables = function (value) {
                this.tables = value;
            };
            
            AppModel.prototype.getTables = function () {
                return this.tables;
            };



            return new AppModel;

        });







    /**
     * AppFactory() 
     * static factory
     * 
     * single access point to angular services
     * and core application factories
     *
     * @param  
     * @return object 
     */


    mainFactory.factory('AppFactory', [
        "$anchorScroll",
        "$location",
        "$timeout",
        "LoginFactory",
        function ($anchorScroll,
                $location,
                $timeout,
                LoginFactory) {

            function AppFactory() {
            }
            ;

            AppFactory.prototype.anchorScroll = function () {
                return $anchorScroll;
            };

            AppFactory.prototype.location = function () {
                return $location;
            };


            AppFactory.prototype.timeout = function () {
                return $timeout;
            };

            AppFactory.prototype.LoginFactory = function () {
                return LoginFactory;
            };

            return new AppFactory;


        }]);



    /**
     * ServiceFactory() 
     * static factory
     *
     * single access point to
     * application REST services
     * 
     * @param  
     * @return object 
     */


    mainFactory.factory('ServiceFactory', [
        "TableService",
        "TablesService",
        "AuthService",
        "OrderService",
        "ServeService",
        "CloseTableService",
        function (TableService,
                TablesService,
                AuthService,
                OrderService,
                ServeService,
                CloseTableService) {

            function ServiceFactory() {
            }
            ;

            ServiceFactory.prototype.TableService = function () {
                return TableService;
            };

            ServiceFactory.prototype.TablesService = function () {
                return TablesService;
            };

            ServiceFactory.prototype.AuthService = function () {
                return AuthService;
            };

            ServiceFactory.prototype.OrderService = function () {
                return OrderService;
            };

            ServiceFactory.prototype.ServeService = function () {
                return ServeService;
            };

            ServiceFactory.prototype.CloseTableService = function () {
                return CloseTableService;
            };



            return new ServiceFactory;


        }]);




    /**
     * CostantsFactory() 
     * static factory
     * 
     * single access point to
     * application constants
     *
     * @param  
     * @return object 
     */

    mainFactory.factory('CostantsFactory', [
        "STATUS_WAITING",
        "STATUS_SERVED",
        "STATUS_FREE",
        "STATUS_CLOSED",
        "RESERVED",
        "NOT_RESERVED",
        "ROLE_WAITER",
        function (STATUS_WAITING,
                STATUS_SERVED,
                STATUS_FREE,
                STATUS_CLOSED,
                RESERVED,
                NOT_RESERVED,
                ROLE_WAITER) {

            function CostantsFactory() {
            }
            ;

            CostantsFactory.prototype.statusWaiting = function () {
                return STATUS_WAITING;
            };

            CostantsFactory.prototype.statusServed = function () {
                return STATUS_SERVED;
            };

            CostantsFactory.prototype.statusFree = function () {
                return STATUS_FREE;
            };

            CostantsFactory.prototype.statusClosed = function () {
                return STATUS_CLOSED;
            };

            CostantsFactory.prototype.statusReserved = function () {
                return RESERVED;
            };

            CostantsFactory.prototype.statusNotReserved = function () {
                return NOT_RESERVED;
            };

            CostantsFactory.prototype.roleWaiter = function () {
                return ROLE_WAITER;
            };


            return new CostantsFactory;


        }]);






    /**
     * UtilFactory() 
     * static factory
     * 
     * single access point to
     * application utility factories
     *
     * @param  
     * @return object 
     */

    mainFactory.factory('UtilFactory', [
        "UpdateTotalAmount",
        "CloseTable",
        "CalculateTotalAmount",
        function (UpdateTotalAmount,
                CloseTable,
                CalculateTotalAmount) {

            function UtilFactory() {
            }
            ;

            UtilFactory.prototype.UpdateTotalAmount = function () {
                return UpdateTotalAmount;
            };

            UtilFactory.prototype.UpdateTable = function () {
                return UpdateTable;
            };

            UtilFactory.prototype.ServedTable = function () {
                return ServedTable;
            };

            UtilFactory.prototype.CloseTable = function () {
                return CloseTable;
            };

            UtilFactory.prototype.CalculateTotalAmount = function () {
                return CalculateTotalAmount;
            };


            return new UtilFactory;


        }]);




    /**
     * UpdateTotalAmount() 
     * static factory
     * 
     * update the total amount
     *
     * @param 
     * @return object 
     */

    mainFactory.factory('UpdateTotalAmount', function () {

        function UpdateTotalAmount() {
        }
        ;

        UpdateTotalAmount.prototype.getTotal = function (current_order) {
            // unpate the total amount
            var total = 0;
            for (var i = 0; i < current_order.length; i++) {
                total += current_order[i]["amount"];
            }
            return total;
        };

        return new UpdateTotalAmount;


    });


    
    /**
     * CalculateTotalAmount() 
     * static factory
     *  
     * update the total amount
     *
     * @param 
     * @return object 
     */

    mainFactory.factory('CalculateTotalAmount', function () {

        function CalculateTotalAmount() {
        }
        ;

        CalculateTotalAmount.prototype.getTotal = function (table) {
            // update the total amount
            var total = 0;
            for (var i = 0; i < table.orders.length; i++) {
                total += parseFloat(table.orders[i]["amount"]);
            }
            return total;
        };

        return new CalculateTotalAmount;


    });






    /**
     * CloseTable()
     * static factory
     * 
     * update table data
     *
     * @param 
     * @return object 
     */

    mainFactory.factory('CloseTable', ["CostantsFactory", function (CostantsFactory) {

            function CloseTable() {
            }
            ;

            CloseTable.prototype.update = function (tables, table) {
                // close the table after paying
                for (var i = 0; i < tables.length; i++) {
                    if (tables[i]["id"] === table) {
                        tables[i]["status"] = CostantsFactory.statusFree();
                        tables[i]["waiter"] = "";
                        if (tables[i]["reserved"] === CostantsFactory.statusReserved()) {
                            tables[i]["reserved"] = CostantsFactory.statusNotReserved();
                        }
                    }
                }
                return tables;
            };

            return new CloseTable;


        }]);






    /**
     * LoginFactory() 
     * manage the application login
     *
     * @param LoginModel
     * @return object 
     */


    mainFactory.factory('LoginFactory', ["LoginModel", function (LoginModel) {

            function LoginFactory() {
            }
            ;

            LoginFactory.prototype.createLogin = function () {
                return new LoginModel();
            };



            return new LoginFactory;


        }]);




    /**
     * LoginModel() 
     * manage the login process of the application
     *
     * @param UserModel
     * @return object 
     */


    mainFactory.factory('LoginModel', ["UserModel", function (UserModel) {

            function LoginModel() {
                var logged = false;
                var user;
            }
            ;

            LoginModel.prototype.init = function (email, name, role, login_time) {
                this.user = UserModel.create(email, name, role, login_time);
                this.logged = true;
            };

            LoginModel.prototype.getUser = function () {
                return this.user;
            };

            LoginModel.prototype.isLogged = function () {
                return this.logged;
            };


            return LoginModel;

        }]);




    /**
     * UserModel() 
     * the user object manager
     *
     * @param 
     * @return object 
     */

    mainFactory.factory('UserModel', function () {

        function UserModel() {
            var login_time;
            var email;
            var name;
            var role;
        }
        ;

        UserModel.prototype.create = function (email, name, role, login_time) {
            this.login_time = login_time.date;
            this.email = email;
            this.name = name;
            this.role = role;
            return this;
        };

        UserModel.prototype.getEmail = function () {
            return this.email;
        };

        UserModel.prototype.getName = function () {
            return this.name;
        };

        UserModel.prototype.getRole = function () {
            return this.role;
        };

        UserModel.prototype.getLoginTime = function () {
            return this.login_time;
        };

        return new UserModel;

    });



})();