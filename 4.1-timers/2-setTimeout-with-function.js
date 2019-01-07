const myFunc = () => {
  console.log('Hello after 5 seconds');
};

setTimeout(myFunc, 5 * 1000);


// myFunc(arg1, arg2, arg3, ...) 
// setTimeout(myFunc, 5 * 1000, 'a', 'b', 1, 2, 3)