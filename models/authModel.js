var jwt=require('jsonwebtoken');
var jwtClave="thisIsTheSalt";

const authModel = {
	loginFunc: (req, res, next) => {
		var token=jwt.sign({usuario:"cecilio"},jwtClave);
	  	res.send(token);
	}
}

module.exports = authModel;