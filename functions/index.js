const functions = require('firebase-functions');
const https = require('https');
const Rinkeby_host = 'rinkeby.infura.io';
const Rinkeby_path = '/v3/7ec884266d6343fab14b21fa52a06343';
const axios = require("axios");
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
    origin: true,
  });

// Ethereum 
const web3 = require('web3');
const Tx = require('ethereumjs-tx');
web3js = new web3('https://'+ Rinkeby_host + Rinkeby_path);

const artifact = require('./TokenLoyalty.json');
const owner = '0xD601682a7584A7541C639899454D201Fe3270e9C';
const key = 'F7481AB0DEDA4E7BFF986CC9001AF506F46689394B66C67AC4CF054A58668E7E';

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

exports.mine = functions.firestore.document('rides/{rideID}')
    .onCreate((snap, context) => {
        var contract = new web3js.eth.Contract(
            artifact.abi,
            artifact.networks['4'].address,
            { from: owner }
        );
        const ride = snap.data();
        if (!ride.rider || !ride.rider.wallet) {
            return;
        }
        const address = snap.data().rider.wallet.accounts[0];
        const data = contract.methods.create(address, ride.rider.mobile).encodeABI();
        // get nonce 
        web3js.eth.getTransactionCount(owner)
            // eslint-disable-next-line promise/always-return
            .then((result) => {
                const nonce = result;
                console.log(`Nonce: ${nonce}`);
                const privateKey = new Buffer(key, 'hex');
                const rawTx = {
                    from: owner,
                    to: contract.options.address,
                    value: 0x0,
                    nonce: nonce,
                    gasPrice: 80000000000,
                    gasLimit: 1000000,
                    chainId: 4,
                    data: data,
                };
                const tx = new Tx(rawTx);
                tx.sign(privateKey);
                const serializedTx = tx.serialize();
                console.log(serializedTx.toString('hex'));
                web3js.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                    .on('receipt', console.log);

            })
            .catch(error => console.error(error));

        console.log(data);
        
    });