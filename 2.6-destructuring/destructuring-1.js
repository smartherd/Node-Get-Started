// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

const { readFile } = require('fs');

const circle = {
  radius: 2,
  someProp: 'someValue',
};

const circleArea = ({radius}, {precision = 2} = {}) => {
	return (PI * radius * radius).toFixed(precision);
}

console.log(circleArea(circle, {precision : 5}));