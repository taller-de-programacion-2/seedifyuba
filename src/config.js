require("dotenv").config();

const ethers = require("ethers");
const deployerMnemonic = process.env.MNEMONIC;

if (process.env.NETWORK === "kovan") {
  console.log("Using kovan network");
  const deployArtifact = require(`../deployments/kovan/Seedifyuba`);
  module.exports = {
    contractAddress: deployArtifact.address,
    contractAbi: deployArtifact.abi,
    deployerMnemonic,
    networkProvider: () => new ethers.providers.InfuraProvider("kovan", process.env.INFURA_API_KEY),
  };
} else {
  console.log("Using localhost network");
  const deployArtifact = require(`../deployments/localhost/Seedifyuba`);
  module.exports = {
    contractAddress: deployArtifact.address,
    contractAbi: deployArtifact.abi,
    deployerMnemonic,
    networkProvider: () => new ethers.providers.JsonRpcProvider(process.env.NETWORK),
  };
}
