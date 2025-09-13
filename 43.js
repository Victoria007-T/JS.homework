
//43. khashven ev ktpen eranish tvi ev ir tvanshanner gumari haraberutyany arjeqy
//  ete eranish tivy mets e trvats "k" tvic hakarak depqum miavorneri tvanshani ev eranish tvi haraberutyan arjeqy

function number(num, k) {
  if (num < 100 || num > 999) {
    return;
  }

  let units = num % 10;
  let tens = Math.floor((num % 100) / 10);
  let hundreds = Math.floor(num / 100);
  let sum = units+tens+hundreds

  if (num > k) {
    return num / sum;
  } else {
    return units / num;
  }
}

console.log(number(345, 2)); 
console.log(number(128, 5)); 