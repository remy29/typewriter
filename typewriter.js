const sentence = "Bacon ipsum dolor amet ball tip tongue chicken, eu pork venison pork chop magna sausage";


const typeWriter = function() {
  let timeOut = 0;
  let accumulator = 0;
  for (const char of sentence) {
    if (accumulator === sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write(char);
        console.log();
      }, timeOut);
    } else {
      setTimeout(() => {
        process.stdout.write(char);
      }, timeOut);
      timeOut += 50;
      accumulator++;
    }
  }
};

typeWriter(sentence);