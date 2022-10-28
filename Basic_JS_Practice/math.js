var totalMoney = 1000;
var productPrice = 700;
var returnMoney = totalMoney - productPrice;

console.log("Return Money : " + returnMoney );




//---------------------------//

var mathemathics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var average =  (mathemathics + biology + chemistry + physics + bangla) / 5;
 
console.log(average.toFixed(2))


//-----------------------------//

var num = 119;
var remainder = 119 % 5;
console.log(remainder);

//---------------DONE--------------//


var num01 = 13;
var num02 = 79;
var num03 = 45;

console.log("The largest Number of 13, 79, 45 is given below. ");

if(num01 < num02 && num03 < num02){
    console.log(num02);
} else if(num02 < num01 && num03 < num01 ){
    console.log(num01);
} else{
    console.log(num03);
}


//----------------------------------//

var a = 7; 
var b = 8;
var c = 7;

if(a==b){
    console.log("A and B are equal sides");
} else if( a == c){
    console.log("A & C are equal sides.");
} else if( b == c){
    console.log("B & C are equal sides.")
} else {
    console.log("The Triangle is not a Isosceles.");
}

//----------------------------------------//


var fruits = ['Appale', 'Banana', 'Orange'];

var indexNumber = fruits.indexOf('Banana');
console.log(indexNumber);   // 1
fruits[1] = 'Mango';
console.log(fruits);  //  [ 'Appale', 'Mango', 'Orange' ]

fruits.pop();
console.log(fruits);        //  [ 'Appale', 'Mango' ]

fruits.push('Watermelon');
console.log(fruits);        //  [ 'Appale', 'Mango', 'Watermelon' ]


//--------------------------------

