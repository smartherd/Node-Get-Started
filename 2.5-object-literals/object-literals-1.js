
const myObject = {
    
    stringProperty: 'some string value',
    numProp: 2,
    bProp: false,

    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],

    pos: { // nested object literal
        x: 40,
        y: 300
    },
};

console.log(myObject.numProp);
console.log(myObject.stringProperty);
console.log(myObject.bProp);

console.log(myObject.images[2]);

myObject.pos.x;		// 40 