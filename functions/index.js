const functions = require('firebase-functions');
const https = require('https');
const Rinkeby_host = 'rinkeby.infura.io';
const Rinkeby_path = '/v3/7ec884266d6343fab14b21fa52a06343';
const axios = require("axios");
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
    origin: true,
  });

exports.proxy = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        var term = request.query.q;
        var data = request.body;
        var url = 'https://'+ Rinkeby_host + Rinkeby_path;
        console.log('Proxy for' + url);
        console.log(data);
        axios.post(url, data)
            // eslint-disable-next-line promise/always-return
            .then(result => {
                console.log(result.data);
                response.set("Access-Control-Allow-Origin", "*");
                response.set("Access-Control-Allow-Methods", "GET, POST");
                response.status(200).send(result.data);
            })
            .catch(err => { 
                console.error(err);
                response.status(500).send(err);
            });
    });
});