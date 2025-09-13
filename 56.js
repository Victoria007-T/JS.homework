//56. ktpi "YES" ete qaranish tvi arajin ev verjin tvanshani mej ka
// "4" tvanshany hakarak depqym "NO"

function number(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  let thousands = Math.floor(num/1000);
  let units = num % 10;


  if (units === 4 && thousands === 4  ) {
   return "YES" ;
   
  } else {
  return "NO";
  }
}
