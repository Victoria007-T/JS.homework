
//158. tpel bolor ayn eranish tveri qanaky
// voronq bazmapatik chen 3i ev 2i

function number(num){
   let count = 0

  for (let i = 100; i <= 999; i++) {
    if (i%2 !== 0 && i%3 !== 0) {
      count ++;
    }
  }

  return count;
}

console.log(divisible3());

