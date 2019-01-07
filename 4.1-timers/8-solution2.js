let counter = 0;

const myFunc = () => {
  console.log('Hello World');
  counter += 1;

  if (counter === 5) {
    console.log('Done');
    clearInterval(timerId);
  }
};

const timerId = setInterval(myFunc, 1000);
