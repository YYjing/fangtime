'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', ['ngRoute',
    'movieCat.detail',
    'movieCat.in_theaters',
    'movie_autoFocus',
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ 'redirectTo': '/in_theaters/1' })
  }])
  .controller('searchCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.inputSearch = '' //获取搜索框输入内容
    $scope.update
 = function() {
      // console.log($scope.inputSearch);
      // 提交时将地址栏更新
      $route.updateParams({ categery: 'search', q: $scope.inputSearch })
    }
  }])

// 使用controller方法获取点击焦点变化
// .controller('moviecatCtl', ['$scope', '$location', function($scope, $location) {
//   // console.log($routeParams.categery);//拿不到另一个模块里的路由参数
//   // console.log($location.path());
//   // var path = $location.path();
//   $scope.$location = $location;
//   $scope.$watch('$location.path()', function(now) {
//     if (now.startsWith('/in_theaters')) { $scope.type = 'in_theaters' };
//     if (now.startsWith('/top250')) { $scope.type = 'top250' };
//     if (now.startsWith('/coming_soon')) { $scope.type = 'coming_soon' };
//   })

// }])
