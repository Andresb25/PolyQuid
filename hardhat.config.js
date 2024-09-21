require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",  // For OpenZeppelin contracts
        settings: {
          optimizer: {
            enabled: true,
            runs: 200  // Adjust the number of runs based on your use case
          }
        }
      },
      {
        version: "0.6.6",   // For UniswapV2Router02 and SafeMath in UniswapV2
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.16",  // For UniswapV2Factory, UniswapV2Pair, etc.
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  
  networks: {
    polygonAmoy: {
      url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};