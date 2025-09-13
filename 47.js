//47.  khashvi ev ktpi eranish tvi tvanshanneri ev miavorneri haraberutyuny, ete 
// ete eranish tivy > e 300ic, hakarak depqym haryursvornri ev miavorneri haraberutyan arjeqy
// (miavorneri arjeqy 0 che)


function number(num) {
  if (num < 100 || num > 999) {
    return;
  }

  let units = num % 10;
  let tens = Math.floor((num % 100) / 10);
  let hundreds = Math.floor(num / 100);

  if (units === 0) {
    return;
  }


  if (num > 300) {
    return tens / units;
  } else {
    return hundreds / units;
  }
}
