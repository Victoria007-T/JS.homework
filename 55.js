
//55. ktpen y=12 ete qaranish tvi mej miavorneri u tasnavorineri artadryaly =e 12
// hakarak depqum y=0
function number9(y) {
  if (y< 1000 || y> 9999) {
    return;
  }

  let tens=Math.floor((y% 100)/10);
  let units=y % 10;

let product=tens*units


  if (product===12) {
   console.log(y=12);
   
  } else {
  console.log(y=0);
  }
}

