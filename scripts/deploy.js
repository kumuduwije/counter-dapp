const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.waitForDeployment();

  console.log(`Counter deployed to: ${await counter.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// 0x0eD686D7Dfa03f45e516a5c66e0Ff5F2DF7035E9 address
// 0xC112a36373Db043788a02Ca817b492f14FE3f1cb new address
