
//160. tpel ayn amenapoqr eranish tivy vory 16ov bazmapatkum es stacvum e bnakan tvi qarakusi
function find() {
  for (let x=100; x<=999; x++) {
    let product = x*16;
    let sqrt=Math.sqrt(product);

    if (Number.isInteger(sqrt)) {
      return x; 
    }
  }
}

console.log(find());

