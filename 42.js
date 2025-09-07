//42. function vory kveradardzni true ete eranish tvi mej kan irar havasar tvanshanner
// hakarak depqum false
function number1(num) {
  if (num < 100 || num > 999) 
    return false;

  let units = num%10; 
  let tens = Math.floor((num % 100) / 10); 
  let hundreds = Math.floor(num / 100);

  return units === tens || units === hundreds || hundreds === tens;
}
console.log(number1(225));
console.log(number1(404))
