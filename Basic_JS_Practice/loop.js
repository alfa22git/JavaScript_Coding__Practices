// -----------   While Loop -----------

var num = 1;

while(num < 10){
    console.log(num);
    num++;
}


//------------------  For Loop  -----------------

var number = 10;
for(var i = 0; i <= number; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//----------------- Array - Loop  -------------------


// Display all elements in an array

var numbers = [11, 22, 33, 44, 55, 66, 77, 88];  // Total Index is : 0 to 7.

for(var i = 0; i < numbers.length; i++){
    console.log(i + " = " + numbers[i]);
}

 
// Output is: 

// 0 = 11
// 1 = 22
// 2 = 33
// 3 = 44
// 4 = 55
// 5 = 66
// 6 = 77
// 7 = 88


