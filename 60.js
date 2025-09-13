//60. y popoxakany kveradardzni "0" arjeq ete qaranish tvi tvanshanneri  
// artadryaly >e 200ic hakarak depqum "1" arjeq

function number(y) {
  if (y < 1000 || y > 9999) {
    return;
  }

  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor((num % 1000) / 100);
  let tens = Math.floor((num % 100) / 10);
  let units = num % 10;

let product = thousands * hundreds * tens * units


  if (product > 200) {
   return 0;
   
  } else {
  return 1
  }
}