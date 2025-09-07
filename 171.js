//171. drakan tareri mijin erkrachapakan
function geometric(arr) {
  let product = 1;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr [i] > 0) { 
      product *= arr[i];
      count ++;
    }
  }

  if (count === 0)
     return 0; 

}

