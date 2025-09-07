//51. t popoxakanin kvergrenq ture arjeqy ete qaranish tvi miavorneri ev tasnavorneri 
// tvanshanneri gumary =e haryuravorneri ev hazaravorneri tvanshanneri gumarin
// hakarak depqum ktpi false


function number5(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  let thousands = Math.floor(num/1000);
  let hundreds = Math.floor((num % 1000)/100);
  let tens = Math.floor((num % 100)/10);
  let units = num % 10;



  if (units+tens === hundreds+thousands) {
   return true
  } else {
   return false
  }
}