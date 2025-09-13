// 41. function vory kveradardzni true ete eranish tvi miavorneri tvanshany havasar lini
// tasnavorneri u haryuravorneri tvanshanneri gumarin, hakarak depqum false


function number(num) {
  if (num < 100 || num > 999) {
    return false; 
  }

  let units = num % 10; 
  let tens = Math.floor((num % 100) / 10); 
  let hundreds = Math.floor(num / 100);

  return units === (tens + hundreds);
}
console.log(number(235));
console.log(number(404));