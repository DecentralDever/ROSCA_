const ROSCA = artifacts.require("ROSCA");

module.exports = function (deployer) {
  const contributionAmount = web3.utils.toWei('0.1', 'ether'); // Example contribution amount
  const cycleDuration = 30 * 24 * 60 * 60; // Example cycle duration (30 days)
  deployer.deploy(ROSCA, contributionAmount, cycleDuration);
};
