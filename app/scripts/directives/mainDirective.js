
/**
 * Description of mainDirective.js
 *
 * @author daniele centamore
 * @email "daniele.centamore@gmail.com"
 */





(function () {


    // module
    var mainDirective = angular.module('mainDirective', []);
    
    
    /**
     * compile 
     * compile element directive
     *
     * @requires "$compile"
     * @param  $compile
     * @return void
     *     
     */ 

    mainDirective.directive('compile', ['$compile', function ($compile) {
            return function (scope, element, attrs) {
                scope.$watch(
                        function (scope) {
                            // watch the 'compile' expression for changes
                            return scope.$eval(attrs.compile);
                        },
                        function (value) {
                            // when the 'compile' expression changes
                            // assign it into the current DOM
                            element.html(value);

                            // compile the new DOM and link it to the current
                            // scope.
                            // NOTE: we only compile .childNodes so that
                            // we don't get into infinite loop compiling ourselves
                            // <span compile="waiting_time_lable"></span>
                            $compile(element.contents())(scope);
                        }
                );
            };
        }]);


    mainDirective.directive('waitingStatus', ["CostantsFactory", function (CostantsFactory) {            
            return function (scope, element, attrs) {

                var data = scope[attrs["waitingStatus"]]
                var status = data.status;
                var updated_at = data.updated_at.date;

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

                // append the html to the element
                if (status === CostantsFactory.statusWaiting()) {
                    element.append(status + "<br><span class='glyphicon glyphicon-time'></span> " + minutes + " min.")
                } else {
                    element.append(status)
                }
            };
        }]);


})();