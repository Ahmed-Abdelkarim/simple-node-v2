
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const favouriteFood = process.env.FAVOURITE_FOOD;
    console.log(`My favourite food is ${favouriteFood}`);	  
    await sleep(5000);
  }
}

main();
