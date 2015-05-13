/*jslint browser: true, devel: true, node: true*/
/*global  angular, $ */

module.exports = function (config) {
  "use strict";
  var popups = [],
    closeAll = function (currentId) {
      angular.forEach(popups, function (popup) {
        if (popup.id !== currentId) {
          popup.close();
        }
      });
    };
  angular.module(config.core.appid)
    .directive('modalSnippet', ['$rootScope', '$q', function ($rootScope, $q) {
      return {
        restrict: 'EA',
        compile: function ($element, $attrs) {
          var opt = {
              id: $attrs.snId,
              areaHidden: $attrs.snAreaHidden,
              ariaLabelledby: $attrs.snAriaLabelledby,
              closeBtn: $attrs.snCloseBtn,
              title: $attrs.snTitle,
              footerClose: $attrs.snFooterClose,
              footerOk: $attrs.snFooterOk,
              openBtn: $attrs.snOpenBtn,
              content: $element.html(),
              FooterOkAction: $attrs.snFooterOkAction,
              size: $attrs.snSize ? 'modal-' + $attrs.snSize : ''
            },
            view = (opt.openBtn ? '<button type="button" class="btn btn-default navbar-btn" ng-click="open()">' + opt.openBtn + '</button>' : '') +
              '<div class="modal fade" id="' + opt.id + '" tabindex="-1" role="dialog" aria-labelledby="' + opt.ariaLabelledby + '" aria-hidden="' + opt.areaHidden + '">' +
              '<div class="modal-dialog ' + opt.size + '">' +
              '<div class="modal-content">' +
              '<div class="modal-header">' +
              (opt.closeBtn ? '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' : '') +
              '<h4 class="modal-title" id="' + opt.ariaLabelledby + '">' + opt.title + '</h4>' +
              '</div>' +
              '<div class="modal-body">' +
              opt.content +
              '</div>' +
              '<div class="modal-footer">' +
              (opt.footerClose ? '<button type="button" class="btn btn-default" data-dismiss="modal">' + opt.footerClose + '</button>' : '') +
              (opt.footerOk ? '<button type="button" class="btn btn-primary" ng-click="success()">' + opt.footerOk + '</button>' : '') +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>';
          $element.html(view);
          return {
            pre: function () {},
            post: function ($scope) {

              $.extend($scope, {
                closeAll: function () {
                  $rootScope.$broadcast('modal:closeAll');
                },
                open: function () {
                  $('#' + opt.id).modal('show');
                },
                success: function () {
                  $scope.FooterOkAction();
                },
                error: function (err) {
                  console.log(err);
                }
              });
              $('#' + opt.id).modal({
                show: false
              });
              $scope.$on('modal:open:' + opt.id, function () {
                $rootScope.$broadcast('modal:closeAll', {
                  id: opt.id
                });
                $('#' + opt.id).modal('show');
              });

              $scope.$on('modal:closeAll', function (event, data) {
                data = data || {};
                if (data.id !== opt.id) {
                  $('#' + opt.id).modal('hide');
                }
              });
            }
          };
        }
      };
    }]);
};