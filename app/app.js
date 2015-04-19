/**
 * Description of app.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */

(function () {


    // main module
    var portofinoApp = angular.module('portofinoApp', ["ngRoute",
        'mainController',
        'loginController',
        'tableController',
        'headerController',
        'menuController',
        'orderController',
        'ordersController',
        'panelController',
        'mainFactory',
        'mainDirective',
        'mainFilter',
        'mainService'])
            .constant('USER_SESSION_EVENT', "user_session")
            .constant('APP_ERROR_EVENT', "errors")
            .constant('TABLES_LOADED_EVENT', "tables_loaded")
            .constant('ORDERS_LOADED_EVENT', "orders_loaded")
            .constant('ORDER_SERVED_EVENT', "order_served")
            .constant('TABLE_CLOSED_EVENT', "table_closed")
            .constant('ORDER_LOADED_EVENT', "order_loaded")
            .constant('ORDER_SAVED_EVENT', "order_saved")
            .constant('STATUS_WAITING', "WAITING")
            .constant('STATUS_SERVED', "SERVED")
            .constant('STATUS_FREE', "FREE")
            .constant('STATUS_CLOSED', "CLOSED")
            .constant('RESERVED', "YES")
            .constant('NOT_RESERVED', "NO")
            .constant('ROLE_WAITER', "WAITER")
            .constant('forcedTimeoutLoader', 1500);
    ;

    // application config
    portofinoApp.config(function ($routeProvider) {

        $routeProvider.when("/login", {
            templateUrl: "./app/scripts/views/partials/login.html"

        }).when("/control-panel", {
            templateUrl: "./app/scripts/views/partials/panel.html"

        }).when("/menu", {
            templateUrl: "./app/scripts/views/partials/menu.html"

        }).when("/tables", {
            templateUrl: "./app/scripts/views/partials/tables.html"

        }).when("/new-order", {
            templateUrl: "./app/scripts/views/partials/neworder.html"

        }).when("/orders", {
            templateUrl: "./app/scripts/views/partials/orders.html"

        }).when("/top", {
            templateUrl: "./app/scripts/views/partials/home.html"

        }).when("/", {
            templateUrl: "./app/scripts/views/partials/home.html"

        }).otherwise({
            redirectTo: '/',
        });

    });

    // remove template cache
    portofinoApp.run(function ($rootScope, $templateCache) {
        $rootScope.$on('$viewContentLoaded', function () {
            $templateCache.removeAll();
        });
    });


    




})();