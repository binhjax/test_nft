const Migrations = artifacts.require('Migrations')
const Web3 = require('web3');


module.exports =  (deployer, network, accounts) => {
  // console.log(accounts)
  deployer.deploy(Migrations)
}
