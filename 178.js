//178. kent index unecox tareri bacardzak arjeqneri gumary
function sum(arr) {
  let sum=0;

  for (let i=1; i<arr.length; i+= 2) {
    sum += Math.abs(arr[i]);
  }

  return sum;
}