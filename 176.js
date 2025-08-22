//176. zuyg index unecox tareri artadryaly
function even1(arr) {
  let product=1;
  let count=0;

  for (let i=0; i<arr.length; i++) {
    if (i%2===0) { 
      product *= arr[i];
      count++;
    }
  }

  if (count===0){
     return 0; 
  }
    
return product;
}