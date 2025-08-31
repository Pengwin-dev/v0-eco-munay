// We are being explicit and importing everything we need at the top.
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"; // This loads the .env file

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // You'll add your network configs here, e.g., 'base'
    // base: {
    //   url: process.env.BASE_RPC_URL || "",
    //   accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    // },
  },
  etherscan: {
    // Your API key from etherscan.io
    apiKey: {
      base: process.env.BASESCAN_API_KEY || ""
    }
  },
};

export default config;
