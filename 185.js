//185 ayn tareri artadryaly voronq bacardzak arjeqov poqr en t tvic
function productNegative(arr, t) {
  let product=1;
  let count=0;

  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < 0 && arr[i] < t) {
      product *= arr[i];
      count++;
    }
  }

}
