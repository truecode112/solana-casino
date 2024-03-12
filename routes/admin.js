module.exports = function ( app, controller ) {
	var middleware = require( '../app/middleware/index' )();
	var validation = require( '../app/validator/index' )();
	app.get( '/backend', middleware.admin.isLogin, controller.login.signin );
	app.post( '/login/check', validation.admin.login, controller.login.signinCheck );
	app.get( '/backend/dashboard', middleware.admin.login, controller.dashboard.view );
	app.get( '/backend/logout', middleware.admin.login, controller.login.logout );
	/* Start: User routing */
	app.get( '/backend/user', middleware.admin.login, controller.user.view );
	app.get( '/backend/getUsers', middleware.admin.login, controller.user.getUsers );
	/* End: User routing */
	/*Start: CMS routing*/
	app.get( '/backend/cms', middleware.admin.login, controller.cms.view );
	/*End: CMS routing*/
	/*Start: Roulette routing*/
	app.get( '/backend/roulette', middleware.admin.login, controller.roulette.view );
	app.get( '/backlend/getRoulette', middleware.admin.login, controller.roulette.getRoulette );
	/*End: Roulette routing*/
	/*Start: Setting routing*/
	app.get( '/backend/setting', middleware.admin.login, controller.setting.view );
	/*End: Setting routing*/
	/*Start: Deposite routing*/
	app.get( '/backend/deposit', middleware.admin.login, controller.deposit.view );
	app.get( '/backend/getDeposit', middleware.admin.login, controller.deposit.getDeposit );
	/*End: Deposite routing 
	/*Start: Withdraw routing*/
	app.get( '/backend/withdraw', middleware.admin.login, controller.withdraw.view );
	/*End: Withdraw routing*/
};
