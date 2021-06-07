const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  contracts_build_directory: "./ui/src/contracts",
  networks: {
    cldev: {
      host: "103.161.39.153",
      // host: "127.0.0.1",
      // port: 8545,
      port: 8501,
      network_id: "*",
      skipDryRun: true,
      from: '0xffbcd481c1330e180879b4d2b9b50642eea43c02'
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL);
      },
      network_id: "*",
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL);
      },
      network_id: "3",
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.6.6",
    },
  },
};
