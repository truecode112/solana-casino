var sha224 = require( 'js-sha256' ).sha224;
var CryptoJS = require( "crypto-js" );
module.exports.gameNumber = function ( length ) {
	var chars = '0123456789';
	var result = '';
	for ( var i = length; i > 0; --i ) result += chars[ Math.floor( Math.random() * chars.length ) ];
	return result;
};

module.exports.randomString = function ( length ) {
	var chars = '0123456789';
	var result = '';
	for ( var i = length; i > 0; --i ) result += chars[ Math.floor( Math.random() * chars.length ) ];
	return result;
};

module.exports.gameHash = function ( roundNumber, hashSalt ) {
	return sha224( roundNumber + '-' + hashSalt );
};

module.exports.randomNumber = function ( length ) {
	var chars = '0123456789';
	var result = '';
	for ( var i = length; i > 0; --i ) result += chars[ Math.floor( Math.random() * chars.length ) ];

	return result;
};

module.exports.getNumber = function ( length ) {
	var chars = '3456';
	var result = '';
	for ( var i = length; i > 0; --i ) result += chars[ Math.floor( Math.random() * chars.length ) ];
	return result;
};

module.exports.getRandomInt = function ( min, max ) {
	var reandomNo = Math.floor( Math.random() * ( max - min + 1 ) + min );
	return reandomNo;
};

module.exports.randomFloat = function () {
	return Math.random();
};

module.exports.getNextIntNumber = function ( number ) {
	return parseInt( number ) + 1;
};

module.exports.randomOnlyNumber = function ( length ) {
	var chars = '0123456789';
	var result = '';
	for ( var i = length; i > 0; --i ) result += chars[ Math.floor( Math.random() * chars.length ) ];
	return result;
};

module.exports.createSecretkey = function ( data ) {
	let secretKey = CryptoJS.SHA256( data );
	return secretKey.toString();
};