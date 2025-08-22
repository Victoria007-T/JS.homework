//162. tpel ayn amenamets qaranish tivy vory 14ov bazmapatkum es stacvum e bnakan tvi qarakusi

function findLargest() {
  for (let x=9999; x>=1000; x--) {
    let product=x*14;
    let sqrt=Math.sqrt(product);

    if (Number.isInteger(sqrt)) {
      return x;
    }
  }
}

console.log(findLargest());
