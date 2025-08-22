//53. ktpi 1 ete qaranish tvi tvanshanneri mej ka "1" tvanshany, hakarak depqum 0

function number7(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  let thousands=Math.floor(num/1000);
  let hundreds=Math.floor((num % 1000)/100);
  let tens=Math.floor((num % 100)/10);
  let units=num % 10;
 if (units === 1 || tens === 1||hundreds === 1 ||thousands === 1) {
    console.log(1);
  }else{
    console.log(0)
  }

}