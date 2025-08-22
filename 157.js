
//157. tpel bolor ayn eranish tveri gumary
// voronq bazmapatik chen 5i

function divisible5(num){
  let sum=0;

  for (let i=100; i<=999;i++) {
    if (i%5!==0) {
      sum += i;
    }
  }

  return sum;
}

console.log(divisible5());