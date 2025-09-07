//151. tpel bolor ayn bnakan tveri gumary voronc vra 
// aranc mnacord bajanvum e trvats "n" bnakan tivy  (?)

function divisible(n){
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i%n === 0) {
      sum += i;
    }
  }

  return sum;
}
