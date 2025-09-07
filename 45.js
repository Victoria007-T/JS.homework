//45.khashven ev ktpen eranish tvi tvanshanneric amenapoqry
function minNumber(num) {
  let digits = num.toString().split("");
  let min = 0;

  for (let i= 0; i<digits.length; i++) {
    let digit = parseInt(digits[i]);
    if (digit < min) {
      min = digit;
    }
  }

  return min;
}

console.log(minNumber(486)); 
