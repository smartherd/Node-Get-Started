const myFunc = delay => {
  console.log('Hello after ' + delay + ' seconds');
};

setTimeout(myFunc, 5 * 1000, 'five');

setTimeout(myFunc, 10 * 1000, 'ten');

setTimeout(myFunc, 15 * 1000, 'ten');
