//155. tpel bolor ayn bnakan erknish tveri gumary
// voronq bazmapatik en 3i

function number(num){
  let sum = 0;

  for (let i = 10; i <= 99; i++) {
    if (i%3 ===0 ) {
      sum += i;
    }
  }

  return sum;
}
