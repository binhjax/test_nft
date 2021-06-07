const Bonsai = artifacts.require('Bonsai');

module.exports =  (deployer, network, accounts) => {
  deployer.deploy(Bonsai);
};
