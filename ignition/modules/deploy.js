const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Address for Wrapped Matic (WMATIC) on Polygon
const WMATIC_ADDRESS = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";

module.exports = buildModule("uniswap_deployment", (m) => {
  // Get the deployer parameter
  const deployer = m.getParameter("deployer");

  // Deploy UniswapV2Factory contract
  const factory = m.contract("UniswapV2Factory", [deployer]);

  // Deploy UniswapV2Router02 contract using the factory's address
  const router = m.contract("UniswapV2Router02", [
    factory.address,
    WMATIC_ADDRESS,
  ]);

  // Return deployed contracts
  return { factory, router };
}, {
  // Define parameters for the module
  parameters: {
    deployer: { type: "address" }, // Deployer is an address type
  },
});
