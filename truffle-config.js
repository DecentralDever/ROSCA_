require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "534352", // Match any network id
    },
    scroll: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        'https://rpc.scroll.io/'
      ),
      network_id: 534352, // Scroll network id
      gas: 8000000, // Adjust as necessary
      gasPrice: 190000000, // 0.19 Gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  },
};
