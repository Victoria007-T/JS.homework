//60. y popoxakany kveradardzni "0" arjeq ete qaranish tvi tvanshanneri  
// artadryaly >e 200ic hakarak depqum "1" arjeq

function number8(y) {
  if (y < 1000 || y > 9999) {
    return;
  }

  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor((num % 1000) / 100);
  let tens = Math.floor((num % 100) / 10);
  let units = num % 10;

let product = thousands * hundreds * tens * units


  if (product > 200) {
   console.log(0);
   
  } else {
  console.log(1)
  }
}