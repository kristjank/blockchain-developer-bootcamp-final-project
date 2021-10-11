const AuctionTest = artifacts.require("AuctionTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("AuctionTest", function (/* accounts */) {
  it("should assert true", async function () {
    await AuctionTest.deployed();
    return assert.isTrue(true);
  });
});
