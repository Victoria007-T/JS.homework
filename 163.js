//163. tpel ayn amenamets qaranish tivy vory 18ov bazmapatkum es stacvum e bnakan tvi qarakusi

function findLargest1() {
  for (let x=9999; x>=1000; x--) {
    let product=x*18;
    let sqrt=Math.sqrt(product);

    if (Number.isInteger(sqrt)) {
      return x;
    }
  }
}

console.log(findLargest1());

