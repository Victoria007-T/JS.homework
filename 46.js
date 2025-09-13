
//46. khashvi ev ktpi eranish tvi tvanshanneri haraberutyuny eranish tvin, ete
// miavorneri tvanshany mets e tasnavorneri tvanshanic hakarak depqum tpel eranish tivy


function number(num) {
  if (num < 100 || num > 999) {
    return;
  }

  let units = num % 10;
  let tens = Math.floor((num % 100) / 10);
  let hundreds = Math.floor(num / 100);
  let sum = units + tens + hundreds

  if (units > tens) {
    return sum / num 
  } else {
    return num 
  }
}
console.log(number(875)); 
console.log(number(301)); 