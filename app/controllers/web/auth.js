module.exports = function ( config ) {
	var module = {};
	module.login = async function ( req, res ) {
		try {
			console.log( 'walletID -->', req.body.walletId );
			if ( true ) {
				console.log( 'New register......' );
				return res.send( JSON.stringify( { "status": 'success', 'message': 'Login successfully' } ) );
			}
		} catch ( error ) {
			console.log( error );
			return res.send( JSON.stringify( { "status": 'fail', 'message': 'Something is wrong try again.' } ) );
		}
	};

	module.logout = async function ( req, res ) {
		let userData = req.session.user;
		await model.User.update( { is_login: "0" }, { where: { id: userData.id } } );
		delete req.session.user;
		req.flash( 'success', "Logout successfully" );
		res.redirect( '/' );
	};
	return module;
};