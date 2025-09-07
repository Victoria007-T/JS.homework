//48. f popoxakanin kveragrenq "a" arjeq, ete eranish tvi 
//tasnavorneri ev haryuravorneri gumary mets lini 5ic, hakarak depqum "b" arjeq

function number5(f) {
  if (f < 100 || f > 999) {
    return;
  }

  let tens = Math.floor((f % 100) / 10);
  let hundreds = Math.floor(f / 100);


  if ((tens + hundreds) > 5) {
    return "a";
  } else {
    return "b";
  }
}

