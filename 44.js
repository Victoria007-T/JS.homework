//44. khashven ev ktpen eranish tvi tvanshanneric amenametsy
function maxNumber(num) {
  let digits = num.toString().split("");
  let max = 0;

  for (let i= 0; i <digits.length; i++) {
    let digit = parseInt(digits[i]);
    if (digit > max) {
      max = digit;
    }
  }

  return max;
}

console.log(maxNumber(472)); 