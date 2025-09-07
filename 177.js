// 177. kent index unecox tareri qarakusineri artadryaly

function odd(arr) {
  let product = 1;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) { 
      product *= (arr[i]**2);
      count ++;
    }
  }

  if (count === 0){
     return 0; 
  }
    
return product;
}