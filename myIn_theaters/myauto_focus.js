/*
 * @Author: Administrator
 * @Date:   2016-02-19 13:47:20
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-24 23:28:25
 */

'use strict';;
(function(angular) {
  //自定义指令是先定义模块然后定义指令
  angular.module('movie_autoFocus', [])
    // 注意定义的时候使用驼峰命名法，然后使用的时候使用中划线的方式
    // 自定义指令不能传$scope,下面的link里可以传
    .directive('autoFocus', ['$location', function($location) {
      return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {

          $scope.$location = $location;
          $scope.$watch('$location.path()', function(now) {
            // 当path发生变化时执行，now是变化后的值
            var aLink = iElm.children().attr('href');
            var type = aLink.replace(/#(\/.+?)\/\d+/, '$1'); // /coming_soon
            if (now.startsWith(type)) {
              // 访问的是当前链接
              iElm.parent().children().removeClass('active');
              iElm.addClass('active');
              // console.log(iElm);
              // console.log($location.path());/

            }
          })

        }
      }
    }])
})(angular);
