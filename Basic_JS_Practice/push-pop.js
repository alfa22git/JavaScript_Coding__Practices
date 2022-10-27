var numbers = [11, 22, 33, 44];
console.log(numbers); // Output: [ 11, 22, 33, 44 ]

// Push--
numbers.push(55);
console.log(numbers); //  Output:  [ 11, 22, 33, 44, 55 ]

// pop ---

numbers.pop();
console.log(numbers); //  Output:  [ 11, 22, 33, 44 ]

//--------------------------

let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);   // [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6];    // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);   // [3, 2, 1, 4, 5, 6]

//------------------------

// && , || , <= , >= , ==

// == equal value
// ===  equal value and equal type