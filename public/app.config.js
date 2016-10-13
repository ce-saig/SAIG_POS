'use strict';

angular.
  module('pos_app').
  config(['$locationProvider','$routeProvider',
  function config($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/product_detail',{

    }).
    when('/order',{

    }).
    when('/stock',{

    }).
    when('/transaction',{

    }).
    when('/developer',{
      template : '<developer></developer>'
    }).
    otherwise('/developer');
  }
]);
