var RckToken = artifacts.require("./RckToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RckToken);
};
