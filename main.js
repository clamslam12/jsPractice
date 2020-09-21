console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');

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
    "isCompleted":true
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
});

//returns an array that contains every object's text in todos
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);//["take out trash", "get groceries", "pick up kids"]

//returns an array containing only objects in todos with isCompleted = true and id = 14
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true && todo.id != 14;
});
console.log(todoCompleted);//[{id: 13, text: "get groceries", isCompleted: true}]

//chaining methods
const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted == true && todo.id != 14;
}).map(function(todo){
    return todo.text;
});//returns an array
console.log(todoCompleted2);//["get groceries"] 






