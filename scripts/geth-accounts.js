function createAccounts() {
    for (var i = 0; i < 10; i++) {
      acc = personal.newAccount("");
      personal.unlockAccount(acc, "");
      eth.sendTransaction({from: eth.accounts[0], to: acc, value: web3.toWei(1000, "ether")});
    }
  }
  
  function unlockAccounts() {
    eth.accounts.forEach(function (account) {
      console.log('Unlocking ' + account + '...');
      personal.unlockAccount(account, '', 86400);
    });
  }
  
  function setupDevNode() {
    // keep accounts unlocked
    while (true) {
        unlockAccounts();
    }
  }
  
  createAccounts();
  setupDevNode();