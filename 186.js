//186. ayn tareri qanaky voronq bacardzak arjeqov poqr en k tvic
function countNeg(arr, k) {
  let count= 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i]<0 && arr[i]<k) {
      count++;
    }
  }

  
  return count;
}