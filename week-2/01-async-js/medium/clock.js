
const runClock = () => {
  setInterval(() => {
    const date= new Date();
    console.log(date.toLocaleTimeString().slice(0, 8));
  }, 1000);
}
runClock();