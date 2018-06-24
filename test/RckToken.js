var RckToken = artifacts.require("./RckToken.sol");

contract('RckToken',function(accounts) {

	it("sets the total supply upon deployment",function(){
		return RckToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),100000000,'Sets the total supply to 100,000,000');
		});
	})
});