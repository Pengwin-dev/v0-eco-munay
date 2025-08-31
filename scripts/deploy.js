const { ethers } = require("hardhat")
const hre = require("hardhat") // Declare hre variable

async function main() {
  console.log("Deploying EcoMunay contracts to Base...")

  // Get the deployer account
  const [deployer] = await ethers.getSigners()
  console.log("Deploying contracts with account:", deployer.address)

  // Deploy EcoMunayReceipt contract
  const EcoMunayReceipt = await ethers.getContractFactory("EcoMunayReceipt")
  const receipt = await EcoMunayReceipt.deploy()
  await receipt.waitForDeployment()
  console.log("EcoMunayReceipt deployed to:", await receipt.getAddress())

  // Deploy EcoMunayVoucher contract
  const EcoMunayVoucher = await ethers.getContractFactory("EcoMunayVoucher")
  const voucher = await EcoMunayVoucher.deploy()
  await voucher.waitForDeployment()
  console.log("EcoMunayVoucher deployed to:", await voucher.getAddress())

  // Save deployment addresses
  const deploymentInfo = {
    network: hre.network.name,
    EcoMunayReceipt: await receipt.getAddress(),
    EcoMunayVoucher: await voucher.getAddress(),
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
  }

  console.log("\nDeployment Summary:")
  console.log(JSON.stringify(deploymentInfo, null, 2))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
