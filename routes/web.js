/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/

module.exports = function ( app, controller ) {
  var middleware = require( '../app/middleware/index' )();
  app.get( '/', controller.roulette.view );
  app.post( '/login', middleware.auth.isLogin, controller.auth.login );
  app.get( '/logout', controller.auth.logout );
  app.get( '/profile', middleware.auth.login, controller.profile.view );
  // deposite coin add
  app.get( '/deposit', middleware.auth.login, controller.deposit.view );	//deposit view
  app.get( '/withdraw', middleware.auth.login, controller.withdraw.view );    //withdraw view
};
