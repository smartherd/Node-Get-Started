const [first, second, , fourth] = [10, 20, 30, 40]; 
// first = 10
// second = 20 
// fourth = 40 


// ... Rest Operator 
const [one, ...restOfItems] = [1, 2, 3, 4];
// one = 1 
// restOfItems = [2, 3, 4]

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data; 
// temp1 = '001'
// temp2 = '002'
// const person = { firstName: 'John', lastName: 'Doe', }


// ... SPREAD OPERATOR 
const newArray = [...restOfItems];

const newObject = {
    ...person
}






