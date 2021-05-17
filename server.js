const favouriteFood = process.env.FAVOURITE_FOOD;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My favourite food is ${favouriteFood}`);	  
    await sleep(5000);
  }
}

main();
