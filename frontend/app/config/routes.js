angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: "../dashboard/dashboard.html"
      }).state('billingCycle', {
        url: "/billingCycle",
        templateUrl: "../billingCycle/tabs.html"
      })
      //linha a baixo caso contrario se nenhum rota foi encontrado ele volta para o dash
      $urlRouterProvider.otherwise('/dashboard')
    }
  ])



  