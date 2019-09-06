var braintree = require('braintree');

const mainModel = {


	myFunction: (req, res, next) => {

				let gateway = braintree.connect({
  accessToken: "access_token$production$bj9nx9n4n6m74tht$3a90d680aaafbe4458f3a3425b48fb47"
});

				gateway.clientToken.generate({}, function (err, response) {

					let json = {
						token : response.clientToken
					}
  //  res.send(JSON.stringify(json));
      res.send(response.clientToken);
  });
		//res.send('híjole? route on things.' + req.query.valor);
	}
}


module.exports = mainModel