//58. khashven ev ktpen qaranish tvi miavorneri ev haryueavorneri artadryaly, ete
//miavorneri tvanshany mets e haryueavorneri tvanshanic, hakarak depqum ktpen "1"
function number(num) {
  if (num < 1000 || num > 9999) {
    return;
  }

  
  let hundreds = Math.floor((num % 1000)/100);
  let units = num % 10; 
  
  if (units > hundreds) {
   return units * hundreds ;
   
  } else {
  return 1;
  }
}