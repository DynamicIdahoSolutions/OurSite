var di = angular.module('di', [
    'ui.router',
    'diControllers',
    'firebase'
]);


di.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | Home'
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | About'
            }
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | Contact'
            }
        })

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'templates/portfolio.html',
            controller: 'portfolioCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | Portfolio'
            }
        })

        .state('services', {
            url: '/services',
            templateUrl: 'templates/services.html',
            controller: 'servicesCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | Services'
            }
        })

        .state('404', {
            url: '/404',
            templateUrl: 'templates/404.html',
            controller: 'servicesCtrl',
            data: {
                pageTitle: 'Dynamic Idaho | 404'
            }
        })

});

di.directive('updateTitle', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        return {
            link: function(scope, element) {

                var listener = function(event, toState) {

                    var title = 'Default Title';
                    if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

                    $timeout(function() {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
]);



