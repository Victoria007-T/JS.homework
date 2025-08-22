//54. y popoxakany kveradardzni "s" arjeq ete qaranish tvi miavorneri ev tasnaorneri tvanshanneri 
// gumary =e 5i hakarak depqum "d" arjeq

function number8(y) {
  if (y< 1000 || y> 9999) {
    return;
  }

  let tens=Math.floor((y% 100)/10);
  let units=y % 10;

let sum=tens+units


  if (sum===5) {
   return "s"
  } else {
  return "d"
  }
}