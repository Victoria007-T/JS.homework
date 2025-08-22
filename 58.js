//58. khashven ev ktpen qaranish tvi miavorneri ev haryueavorneri artadryaly, ete
//miavorneri tvanshany mets e haryueavorneri tvanshanic, hakarak depqum ktpen "1"
function number11(num) {
  if (num< 1000 || num> 9999) {
    return;
  }

  
  let hundreds=Math.floor((num % 1000)/100);
  let units=num % 10; 
  
  if (units>hundreds) {
   console.log(units*hundreds);
   
  } else {
  console.log(1);
  }
}