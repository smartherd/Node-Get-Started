// Scalar values
const score = 42;
const message = 'Hello';

// score = 60; // Error 

// Arrays and Objects
const numbers = [1, 2, 3, 4];
const student = {
  firstName: 'Peter',
  lastName: 'Doe',
};

// numbers = [4, 5, 6]; // Error 

console.log(numbers);

Object.freeze(numbers);
numbers[0] = 99; // No impact as the array is FREEZED

console.log(numbers);
