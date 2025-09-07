//180. trvats drakan ev bacasakan tarreri qanaky

function count(arr) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount ++;
    } else if (arr [i] < 0) {
      negativeCount ++;
    }
   
  }
}

