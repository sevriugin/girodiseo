/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const https = require('https');
const Rinkeby_host = 'rinkeby.infura.io';
const Rinkeby_path = '/v3/7ec884266d6343fab14b21fa52a06343';
const axios = require("axios");
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
    origin: true,
  });

// admin interface
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// set admin by fixed phone number
admin.auth().getUserByPhoneNumber('+79037203037').then((user) => {
    // Add custom claims for additional privileges.
    // This will be picked up by the user on token refresh or next sign in on new device.
    return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
    });
  })
  .catch((error) => {
    console.log(error);
});

// Ethereum 
const web3 = require('web3');
const Tx = require('ethereumjs-tx');
web3js = new web3('https://'+ Rinkeby_host + Rinkeby_path);

const artifact = require('./TokenLoyalty.json');
const owner = '0xD601682a7584A7541C639899454D201Fe3270e9C';
const key = 'F7481AB0DEDA4E7BFF986CC9001AF506F46689394B66C67AC4CF054A58668E7E';

const crypto = require('crypto');
const FormData = require('form-data');
const concat = require("concat-stream");
const formurlencoded = require('form-urlencoded').default;
const utf8 = require('utf8');

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

    exports.ordersFilter = functions.firestore.document('orders/{ref}').onUpdate((change, context) => {
      // Retrieve the current and previous value
      const data = change.after.data();
      const previousData = change.before.data();

      // We'll only update if the name has changed.
      // This is crucial to prevent infinite loops.
      if (data.status === 'new') return null;

      // Retrieve the current count of name changes
      let changes = false;
      if (data.client !== previousData.client || data.date !== previousData.date) {
        changes = true;
      }
      // let's check items list 
      if (data.items.length !== previousData.items.length) {
        changes = true;
      } else {
          // need to check all items now
          for( let i = 0; i < data.items.length; i++) {
              if (
                  data.items[i].code !== previousData.items[i].code ||
                  data.items[i].currency !== previousData.items[i].currency ||
                  data.items[i].id !== previousData.items[i].id ||
                  data.items[i].name !== previousData.items[i].name ||
                  data.items[i].price !== previousData.items[i].price ||
                  data.items[i].priceTag !== previousData.items[i].priceTag ||
                  data.items[i].qty !== previousData.items[i].qty
                ) {
                    changes = true;
                    break;
                }
          }
      }

      if (changes) {
          return change.after.ref.set({
              client: previousData.client,
              date: previousData.date,
              items: previousData.items
            }, {merge: true});
      }
    });

    exports.snitch = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var id = request.query.id;
            var url = 'https://www.ikea.com/ru/ru/catalog/products/' + id + '/';
            console.log('Snitching url: ' + url);
            axios({
                method:'get',
                url: url,
                responseType: 'text'
              })
                // eslint-disable-next-line promise/always-return
                .then(result => {
                    console.log(result.data);
                    // var dom = parser.parseFromString(result.data);
                    // console.log(dom.getElementById('schemaProductId').innerHTML);
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

    exports.register = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var data = request.body;
            var url = 'https://test.best2pay.net/webapi/Register';
            console.log('register started');
            const str = `${data.sector}${data.amount}${data.currency}test`;
            const signature = crypto.createHash('md5').update(utf8.encode(str),'utf8').digest('hex');
            data.signature = Buffer.from(signature).toString('base64');

            console.log('Data:');
            console.log(data);

            console.log('Using: formurlencoded for utf8 string ...');
            console.log('String: '+ str);
            console.log('UTF8 ecoded: '+ utf8.encode(str));
            console.log('Signature: ' + data.signature);
            
            axios({
                method:'post',
                url: url,
                data: formurlencoded(data),
                config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
                })
                    // eslint-disable-next-line promise/always-return
                    .then(result => {
                        console.log(result.data);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(200).send(result.data);
                    })
                    .catch(err => { 
                        console.error(err);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(500).send(err);
                    });
            // }));
        });
    });

    exports.authorize = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var data = request.body;
            var url = `https://test.best2pay.net/webapi/Purchase?sector=${data.sector}&id=${data.id}&signature=`;
            console.log('Authorize / Purchase started');
            console.log('URL before signature: ' + url);
            const str = `${data.sector}${data.id}test`;
            const signature = crypto.createHash('md5').update(utf8.encode(str),'utf8').digest('hex');
            data.signature = Buffer.from(signature).toString('base64');

            console.log('Data:');
            console.log(data);
            url = url + data.signature;
            console.log('Using post for url ...');

            console.log('URL: '+ url);
            
            axios.get(url)
                    // eslint-disable-next-line promise/always-return
                    .then(result => {
                        console.log('result.request: Host, path');
                        console.log(result.request.getHeader('Host'));
                        console.log(result.request.path);
                        
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(200).send(`https://${result.request.getHeader('Host')}${result.request.path}`);
                    })
                    .catch(err => { 
                        console.error(err);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(500).send(err);
                    });
            // }));
        });
    });

    exports.operation = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var data = request.body;
            var url = 'https://test.best2pay.net/webapi/Operation';
            console.log('operation started');
            const str = `${data.sector}${data.id}${data.operation}test`;
            const signature = crypto.createHash('md5').update(utf8.encode(str),'utf8').digest('hex');
            data.signature = Buffer.from(signature).toString('base64');

            console.log('Data:');
            console.log(data);

            console.log('Using: formurlencoded for utf8 string ...');
            console.log('String: '+ str);
            console.log('UTF8 ecoded: '+ utf8.encode(str));
            console.log('Signature: ' + data.signature);
            
            axios({
                method:'post',
                url: url,
                data: formurlencoded(data),
                config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
                })
                    // eslint-disable-next-line promise/always-return
                    .then(result => {
                        console.log(result.data);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(200).send(result.data);
                    })
                    .catch(err => { 
                        console.error(err);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(500).send(err);
                    });
            // }));
        });
    });

    exports.order = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var data = request.body;
            var url = 'https://test.best2pay.net/webapi/Order';
            console.log('order started');
            const str = `${data.sector}${data.id}${data.reference}test`;
            const signature = crypto.createHash('md5').update(utf8.encode(str),'utf8').digest('hex');
            data.signature = Buffer.from(signature).toString('base64');

            console.log('Data:');
            console.log(data);

            console.log('Using: formurlencoded for utf8 string ...');
            console.log('String: '+ str);
            console.log('UTF8 ecoded: '+ utf8.encode(str));
            console.log('Signature: ' + data.signature);
            
            axios({
                method:'post',
                url: url,
                data: formurlencoded(data),
                config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
                })
                    // eslint-disable-next-line promise/always-return
                    .then(result => {
                        console.log(result.data);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(200).send(result.data);
                    })
                    .catch(err => { 
                        console.error(err);
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(500).send(err);
                    });
            // }));
        });
    });

    exports.claims = functions.https.onRequest((request, response) => {
        return cors(request, response, () => {
            var data = request.body;
            var idToken = request.body.idToken;
            var mobile = request.body.mobile;
            var claim = request.body.claim;
            var phone = request.body.phone;
            console.log('Claim set for phone: ' + phone);
            console.log('Claim type: ' + claim);
            admin.auth().verifyIdToken(idToken)
                .then((claims) => {
                    // eslint-disable-next-line promise/always-return
                    if (claims.admin === true) {
                        // eslint-disable-next-line promise/no-nesting
                        admin.auth().getUserByPhoneNumber(phone).then((user) => {
                            var claimObj = {};
                            claimObj[claim] = true;
                            // eslint-disable-next-line promise/no-nesting
                            admin.auth().setCustomUserClaims(user.uid, claimObj)
                                .then(() => {
                                    response.set("Access-Control-Allow-Origin", "*");
                                    response.set("Access-Control-Allow-Methods", "GET, POST");
                                    response.status(200).send(JSON.stringify({status: 'success'}));
                                    return;
                                })
                                .catch((error) => {
                                    console.log(error);
                                    response.set("Access-Control-Allow-Origin", "*");
                                    response.set("Access-Control-Allow-Methods", "GET, POST");
                                    response.status(500).send(error);
                                    return;
                                });
                          })
                          .catch((error) => {
                            console.log(error);
                            response.set("Access-Control-Allow-Origin", "*");
                            response.set("Access-Control-Allow-Methods", "GET, POST");
                            response.status(500).send(error);
                            return;
                        });
                    } else {
                        console.log('Not admin user');
                        response.set("Access-Control-Allow-Origin", "*");
                        response.set("Access-Control-Allow-Methods", "GET, POST");
                        response.status(500).send(JSON.stringify({status: 'Not admin user'}));
                        return;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    console.log(error);
                    response.set("Access-Control-Allow-Origin", "*");
                    response.set("Access-Control-Allow-Methods", "GET, POST");
                    response.status(500).send(error);
                    return;
            });
        });
    });