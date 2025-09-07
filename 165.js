//165. t tramabanakan typi popoxakanin kveragri ture arjeq
// ete trvats n bnakan tivy 3i artichan e

function number(n) {
  if (n < 1)
     return false;

  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

function number4(n) {
  if (n<1)
     return false;

  while (n % 4 ===0) {
    n /=4;
  }
  return n === 1;
}