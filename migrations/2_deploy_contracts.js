var RckToken = artifacts.require("./RckToken.sol");
var RckTokenSale = artifacts.require("./RckTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(RckToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(RckTokenSale, RckToken.address, tokenPrice);
  });
};
