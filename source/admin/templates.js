angular.module('raving').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/custom-query.html',
        "<!DOCTYPE html>\n<div class=\"input-group\">\n  <span class=\"input-group-addon\">route</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"\" ng-model=\"route\">\n</div>\n<br>\n<textarea class=\"form-control\" placeholder=\"Password\" ng-model=\"data\"></textarea>\n<button type=\"button\" class=\"btn btn-success col-md-5\" ng-click=\"send()\">Отправить</button>\n<div ng-bind=\"result\" class=\"col-md-12\"></div>");
}]);
angular.module('raving').run(['$templateCache', function($templateCache) {
    $templateCache.put('core/auth/snippet.html',
        "<!DOCTYPE html>\n<button type=\"button\" class=\"btn btn-success navbar-btn\" ng-click=\"openLoginPopup()\" ng-if=\"!user.auth\">\n  <span class=\"glyphicon glyphicon-log-in\"></span>\n</button>\n<a href=\"#/profile\" type=\"button\" class=\"btn btn-success navbar-btn\" ng-if=\"user.auth\">\n  <span class=\"glyphicon glyphicon-user\"></span>\n</a>\n<button type=\"button\" class=\"btn btn-default navbar-btn\" ng-click=\"logout()\" ng-if=\"user.auth\">\n  <span class=\"glyphicon glyphicon-log-out\"></span>\n</button>\n\n\n\n<modal-snippet sn-id=\"auth-login-modal\" sn-area-hidden=\"true\" sn-aria-labelledby=\"myModalLabel\" sn-close-btn=\"true\" sn-title=\"Авторизация\" sn-size=\"sm\">\n  <div class=\"input-group\" ng-class=\"errors.login.login?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" ng-model=\"user._.login\">\n  </div>\n  <br>\n  <div class=\"input-group\" ng-class=\"errors.login.password?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"user._.password\">\n  </div>\n  <a ng-click=\"openRegisterPopup()\">Регистрация</a> или\n  <a ng-click=\"openRecoveryPopup()\">Восстановление</a>\n  <br>\n  <br>\n  <button type=\"button\" class=\"btn btn-success col-md-5\" ng-click=\"login()\">Вход</button>\n  <button type=\"button\" class=\"btn btn-default col-md-5 col-md-offset-2\" ng-click=\"close()\">Отмена</button>\n</modal-snippet>\n\n\n<modal-snippet sn-id=\"auth-register-modal\" sn-area-hidden=\"true\" sn-aria-labelledby=\"myModalLabel\" sn-close-btn=\"true\" sn-title=\"Регистрация\" sn-size=\"sm\">\n  <div class=\"input-group\" ng-class=\"errors.register.login?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" ng-model=\"user._.login\">\n  </div>\n  <br>\n  <div class=\"input-group\" ng-class=\"errors.register._password.value?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"user._._password.value\">\n  </div>\n  <br>\n  <div class=\"input-group\" ng-class=\"errors.register._password.revalue?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Retype password\" ng-model=\"user._._password.revalue\">\n  </div>\n  <a ng-click=\"openLoginPopup()\">Войти</a> или\n  <a ng-click=\"openRecoveryPopup()\">Восстановить пароль</a>\n  <br>\n  <br>\n\n  <button type=\"button\" class=\"btn btn-success col-md-5\" ng-click=\"register()\">Регистрация</button>\n  <button type=\"button\" class=\"btn btn-default col-md-5 col-md-offset-2\" ng-click=\"close()\">Отмена</button>\n</modal-snippet>\n\n\n<modal-snippet sn-id=\"auth-recovery-modal\" sn-area-hidden=\"true\" sn-aria-labelledby=\"myModalLabel\" sn-close-btn=\"true\" sn-title=\"Восстановить пароль\" sn-size=\"sm\">\n  <div class=\"input-group\" ng-class=\"errors.register.login?'has-error':''\">\n    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" ng-model=\"user._.login\">\n  </div>\n  <a ng-click=\"openLoginPopup()\">Войти</a> или\n  <a ng-click=\"openRegisterPopup()\">Зарегистрироваться</a>\n  <br>\n  <br>\n  <button type=\"button\" class=\"btn btn-success col-md-5\" ng-click=\"recovery()\">Восстановление</button>\n  <button type=\"button\" class=\"btn btn-default col-md-5 col-md-offset-2\" ng-click=\"close()\">Отмена</button>\n</modal-snippet>");
}]);