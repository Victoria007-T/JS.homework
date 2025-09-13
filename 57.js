
//57. ktpi "YES" ete qaranish tivy = nra tvanshanneri gumari qarakusun
// hakarak depqum "NO"

function number(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor((num % 1000) /100);
  let tens = Math.floor((num % 100) / 10);
  let units = num % 10; 
  
  let sum = (thousands+hundreds+tens+units) ** 2



  if (num === sum ) {
    return "YES" ;
   
  } else {
  return "NO";
  }
}

