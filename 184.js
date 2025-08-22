//184.ayn tareri xoranardneri gumary voronq bacardzak arjeqov poqr en k tvic
function sum(arr, k) {
  let sum=0;

  for (let i=0; i< arr.length; i++) {
    if (arr[i] < 0 && arr[i] < k) {
      sum += (arr[i]**3) ;
    }
  }

  return sum;
}
