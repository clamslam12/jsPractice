console.log('hello world');
console.error('this is an error');
//n('this is a warning');

let age = 31;
age = 30;
console.log(age);



//**********primitives
//String, number, boolean, null, undefined

const name = 'minh';
const num = 3;
const rating = 3.5;
const isTrue = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);

//***************concatenation
console.log([1,2,3]+[31, 24]); //returns a string
console.log([1,2,3]+['minh', 24]); //returns a string

//*************template string
console.log(`my name is ${name} and I'm ${age} years old`);// using backticks

//**************object properties/methods
const s = 'hello world';
console.log(s.length); //prints 11
console.log(s.toUpperCase());//returns HELLO WORLD
console.log(s.toLowerCase());//returns hello world
console.log(s.substring(0,5)); //returns hello 
console.log(s.substring(6).toUpperCase()); //prints WORLD
console.log('minh 31 pizza honda colorado'.split(' '));//returns ["minh", "31", "pizza", "honda", "colorado"]
console.log('hello'.split('')); //returns ["h", "e", "l", "l", "o"]

/*multi
line
comment */


//************arrays
let numbers = new Array(1,2,3,4,5);

let favs = ['pizza', 31, 3.14, false];

console.log(numbers);
console.log(favs);
favs.push('hi');//push an element to the end of the array; returns the length after pushing
favs.unshift('world'); //adds element to the front of array; returns length after unshifting
favs.pop(); //pop the last element and returns it
console.log(Array.isArray(favs)); //is an array? returns boolean value
console.log(favs.indexOf(3.14)); //returns index of argument

//************object literals
const person = {
    firstName : 'john',
    lastName : 'doe',
    iage : 23,
    hobbies : ['basketball', 'movies', 'coding', 23],
    address: {
        street: 6129,
        city: 'arvada',
        state: 'colorado'

    }
}

console.log(person.age, person.address.city, person.hobbies[1]);//prints 23 arvada movies

//************object destructuring
const {iage, firstName, lastName, hobbies, address: {street}} = person; //returns object values w/o dot operator

console.log(iage, firstName, lastName, hobbies , street); //returns 23 "john" "doe" ["basketball", "movies", "coding", 23] 6129
person.email = 'john@email.com';
console.log(person); 
/*  address: {street: 6129, city: "arvada", state: "colorado"}
    email: "john@email.com"
    firstName: "john"
    hobbies: (4) ["basketball", "movies", "coding", 23]
    iage: 23
    lastName: "doe"
 */ 

//************array of objects
const todos = [
    {
        id: 12,
        text: 'take out trash',
        isCompleted : false
    },
    {
        id: 13,
        text: 'get groceries',
        isCompleted : true
    },
    {
        id: 14,
        text: 'pick up kids',
        isCompleted : true
    }
];

console.log(todos[1].text);//get groceries

//************JSON format 
//all keys and string values are surrounded by double quotes; 

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
/* 
[
 {
    "id":12,
    "text":"take out trash",
    "isCompleted":false
 },
 
 { "id":13,
    "text":"get groceries",
    "isCompleted":true
 },
 
 {  "id":13,
    "text":"pick up kids",
    "isCompleted":true
 }
]
 */

//***********For loops
for(let i=0; i<10; i++){
    console.log(`for loop i value ${i}`);
}

for(let i=0; i<todos.length; i++){//regular for loop iter
    console.log(todos[i].text);
}

for(let object of todos){//pythonic for loop iter
    console.log(object.id);
}


//*******while loops
let i = 0;
while(i<10){
    console.log(`while loop i value ${i}`);
    i++;
}
console.log(`i = ${i}`);//i = 10

//***********high order array methods: forEach, map, filter

todos.forEach(function(todo){//function as argument
    console.log(todo.isCompleted);
}); //prints false true true

//returns an array that contains every object's text in todos
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);//["take out trash", "get groceries", "pick up kids"]

//returns an array containing only objects in todos with isCompleted = true and id != 14
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true && todo.id != 14;
});
console.log(todoCompleted);//[{id: 13, text: "get groceries", isCompleted: true}]

//chaining methods
const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted == true && todo.id != 14;// [{id: 13, text: "get groceries", isCompleted: true}]
}).map(function(todo){ // ["get groceries"] 
    return todo.text;
});//returns an array
console.log(todoCompleted2);//["get groceries"] 

// **********************Conditionals

const sX = '10'; 
if(sX == 10){ // == only matches on value NOT data types; prints x is 10
    console.log('x is 10');
}

const sY = '10';
if(sY === 10){ // === matches on value AND data types; does not print
    console.log('y is 10 in value and data type');
}else if(sY == 10){
    console.log('y is 10 in value');

}else{
    console.log('y is NOT 10'); //prints this
}

// ternary operator

const num1 =  10;
const clr = num1 > 10? 'red': 'yellow';// if num1 > 10, clr = red, else clr = yellow
console.log(clr); // prints yellow

// switch-case 

switch(clr){
    case 'red':
        console.log('color is red');
        break;// must have break at the end of every case
    case 'yellow':
        console.log('color is yellow');// prints color is yellow
        break;
    default:
        console.log('no color');
        break;
}   

///*******************Functions

 function addNums(num1, num2){
     return (num1+num2);
 }
 console.log(addNums(5, 5)); // prints 10

 function addNums2(num1 = 2, num2 = 3){// default arguments
    return (num1+num2);
}
console.log(addNums2()); // prints 5
console.log(addNums2(1,1));// prints 2; overrides default argument

// arrow functions
const addNums3 = (num1 =4, num2 = 2) => {// can use brackets
    console.log(num1+num2);
}
addNums3();// prints 6

const addNums4 = (num1=3, num2=1) => console.log(num1+num2);//no need for brackets
addNums4();// prints 4

const addNums5 = (num1=2, num2=7) => num1+num2;// no need to use return keyword if returning a value
console.log(addNums5());// prints 9

const addNums6 = num1 => num1 + 5;// no need for parentheses if using one parameter
console.log(addNums6(10));// prints 15 

//*******arrow functions in high-order array functions */
todos.forEach((todo) => console.log(todo));//accepts arrow function
// prints each element in todos; 
// {id: 12, text: "take out trash", isCompleted: false}
// {id: 13, text: "get groceries", isCompleted: true}
// {id: 14, text: "pick up kids", isCompleted: true}

//**************************Object Oriented Programming */

// constructor function (ES5)
function Person(firstName, lastName, dob){
    //member variables
    this.firstName = firstName;// use "this" keyword to refer to the current obj
    this.lastName = lastName;
    this.dob = new Date(dob);// returns a Date object
    //member functions
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);// Person {firstName: "John", lastName: "Doe", dob: Thu Apr 03 1980 00:00:00 GMT-0700 (Mountain Standard Time)}
console.log(person2.firstName);// Mary
console.log(person2.dob.getFullYear());// 1970
console.log(person1.getBirthYear());// 1980
console.log(person1.getFullName());// John Doe

// proto types(obj within an obj); use when there are objects that do not utilize some member functions/variables
Person.prototype.getLastFirstName = function(){
    return `${this.lastName} ${this.firstName}`;
}
console.log(person2.getLastFirstName());// Smith Mary
console.log(person2);

// Classes (ES6); works exactly as constructor functions; syntactic sugar
class Human {

    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const human1 = new Human('John', 'Doe', '4-3-1980');
const human2 = new Human('Mary', 'Smith', '3-6-1970');

console.log(human2.firstName);// Mary
console.log(human2.dob.getFullYear());// 1970
console.log(human1.getBirthYear());// 1980
console.log(human1.getFullName());// John Doe
console.log(human1);// Human {firstName: "John", lastName: "Doe", dob: Thu Apr 03 1980 00:00:00 GMT-0700 (Mountain Standard Time)}

