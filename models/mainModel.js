
const mainModel = {
	myFunction: (req, res, next) => {
		res.send('híjole? route on things.' + req.query.valor);
	},

	proccessPost : (req, res, next) => {
	   res.send(req.body.nombre);
	}
}


module.exports = mainModel