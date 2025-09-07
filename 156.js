//156. tpel bolor ayn bnakan erknish tveri artadryaly
// voronq bazmapatik en 3i ev 5i

function divisible(num){
  let product = 1;

  for (let i = 10; i <= 99; i++) {
    if (i%3 === 0 && i%5 === 0 ) {
      product *= i;
    }
  }

  return product;
}
