/*
1. Var vs. Let 
2. Block Scopes 
*/


{
  // Block Scope
}

if (true) {
  // Block Scope
}


for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function multiply(a, b) {
  // Function Scope
  var result = a * b;
}

multiply(2, 3);
