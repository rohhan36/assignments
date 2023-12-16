let counter = 0;

const runCounter = () => {
const interval = setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);
}

runCounter();
