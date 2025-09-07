
//59.y popoxakany kveradardzni "1" arjeq ete qaranish tvi tvanshanneri  
// gumary >e 20ic hakarak depqum "0" arjeq

function number8(y) {
  if (y < 1000 || y > 9999) {
    return;
  }

  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor((num % 1000) / 100);
  let tens = Math.floor((num % 100) / 10);
  let units = num % 10;

let sum = thousands+hundreds+tens+units


  if (sum > 12) {
   console.log(1);
   
  } else {
  console.log(0)
  }
}

