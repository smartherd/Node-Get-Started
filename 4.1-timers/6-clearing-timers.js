const myFunc = () => console.log('You will not see this one!');

const timerId = setTimeout(myFunc, 0);

// More code 

clearTimeout(timerId);


// const timerId = setImmediate(myFunc)
// clearImmediate(timerId)

// const timerId = setInterval(myFunc, delay) 
// clearInterval(timerId) 