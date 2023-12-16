const printCount = (count) => {
  console.log(count);
}

const runCounter = (count) => {
  setTimeout(() => {
    printCount(count);
    runCounter(count + 1);
  }, 1000);
}

runCounter(0);