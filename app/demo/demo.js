'use strict';

var myDemoApp = angular.module('myDemoApp', ['formsAngular']);

myDemoApp.config(['$routeProvider', function($routeProvider) {

        $routeProvider.
            when('/index', {templateUrl: 'partials/howto.html'} ).
            when('/404', {templateUrl: 'partials/404.html'} ).
            when('/z_custom_form/new', {templateUrl: 'partials/custom-new.html', controller: "BaseCtrl"}).            // example view override
            when('/z_custom_form/:id/edit', {templateUrl: 'partials/custom-edit.html', controller: "BaseCtrl"}).      // example view override
            when('/z_custom_form/:form/new', {templateUrl: 'partials/custom-new.html', controller: "BaseCtrl"}).      // example view override with specified form content
            when('/z_custom_form/:form/:id/edit', {templateUrl: 'partials/custom-edit.html', controller: "BaseCtrl"}).// example view override with specified form content

            // This next block is the default forms angular routing.  Can't figure out how to get it to work from that module.
            when('/:model/:id/edit', {templateUrl: 'partials/base-edit.html', controller: "BaseCtrl"}).
            when('/:model/new', {templateUrl: 'partials/base-edit.html', controller: "BaseCtrl"}).
            when('/:model', {templateUrl: 'partials/base-list.html', controller: "BaseCtrl"}).
            when('/:model/:form/:id/edit', {templateUrl: 'partials/base-edit.html', controller: "BaseCtrl"}).  // non default form (different fields etc)
            when('/:model/:form/new', {templateUrl: 'partials/base-edit.html', controller: "BaseCtrl"}).       // non default form (different fields etc)
            when('/:model/:form', {templateUrl: 'partials/base-list.html', controller: "BaseCtrl"}).           // list page with links to non default form

            otherwise({redirectTo: '/index'});
    }]
);
