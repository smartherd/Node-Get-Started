
// Regular function 
const func1 = function() {
	console.dir(this, {depth:0});
  // "this" here is the caller of func1 
};

// Arrow Function 
const func2 = () => {
	console.log(this);
  // "this" here is NOT the caller of func2
  // It's the same "this" found in func2's scope
};

func1();
func2();
