// web3 account extract --keyfile ~/Downloads/keystore-file --password password
var keythereum = require('keythereum')
// var EthUtil = require('ethereumjs-util');
// var Wallet = require('ethereumjs-wallet');


var datadir = 'wallet'
var address = '0xffbcd481c1330e180879b4d2b9b50642eea43c02'

var keyObject = keythereum.importFromFile(address, datadir);

var password="123456"
var privateKey = keythereum.recover(password, keyObject);

console.log("privateKey: ", privateKey.toString('hex'))