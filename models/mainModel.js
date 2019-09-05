
const mainModel = {
	myFunction: (req, res, next) => {
		res.send('híjole? route on things.' + req.query.valor);
	}
}


module.exports = mainModel