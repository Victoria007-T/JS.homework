//161.tpel ayn amenapoqr qaranish tivy vory 26ov bazmapatkum es stacvum e bnakan tvi qarakusi

function find1() {
  for (let x = 1000; x <= 9999; x++) {
    let product = x*26;
    let sqrt = Math.sqrt(product);

    if (Number.isInteger(sqrt)) {
      return x; 
    }
  }
}

console.log(find1());
