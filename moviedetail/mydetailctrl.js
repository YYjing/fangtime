;
(function(angular) {
  // 设置路由器,必须依赖路由模块
  var mymodule = angular.module('movieCat.detail', [
    'ngRoute',
    'movieCat.services.http',
    // 'auto_focus'
  ]);
  // 配置路由
  mymodule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/subject/:id', {
      templateUrl: 'moviedetail/mydetail.html',
      controller: 'mydetailCtrl'
    })
  }]);
  // 因为豆瓣不支持ng的http服务,所以调用自己写的jsonp，注意文件引入顺序
  mymodule.controller('mydetailCtrl', [
    '$scope',
    '$route',
    // '$http',
    '$routeParams',
    '$yuHttp',
    'AppConfig',
    function($scope, $route, $routeParams, $yuHttp, AppConfig) {
      $scope.loading = true; //用自己定义的jsonp
      $yuHttp.jsonp(AppConfig.DETAIL_PATH + $routeParams.id, {}, function(response) {
        // console.log(response);
        $scope.movie = response;
        $scope.loading = false;
        $scope.$apply();

      })
    }

  ])
})(angular);
