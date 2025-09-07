//52. khashven ev ktpen qaranish tvi haraberutyan arjeqy miavorneri ev haryuravorneri 
// tvanshanneri gumarin, ete qaranish tivy poqr e 5000ic, hakarak depqum tpel 
//  qaranish tvi haraberutyan arjeqy hazaravorneri ev haryuravorneri tvanshanneri gumarin
// (miavorner ev haryuravorner =che 0)

function number6(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  let thousands = Math.floor(num/1000);
  let hundreds = Math.floor((num % 1000)/100);
  let tens = Math.floor((num % 100)/10);
  let units = num % 10;
 if (units === 0) {
    return;
  }

 if (hundreds === 0) {
    return;
  }
let sum1 = tens+units
let sum2 = thousands+hundreds

  if (num < 5000) {
   console.log(num / sum1)
  } else {
   console.log(num / sum2)
  }
}