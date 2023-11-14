<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <p id="demo1"></p>
    <!-- <button >click</button> -->
    <script src="import.js">
      //bind
//        class React{
//         constructor(){
//           this.library ="React"
//           this.server="https:/localhost:300"
//           //requirement
//           document.querySelector('button')
//           .addEventListener('click',this.handelClick.bind(this))
//         }
//         handelClick(){
//           // document.getElementById("demo").innerHTML;
//           document.getElementById("demo1").innerHTML=(this.server)
//         }
//        }
// const app = new React


// function greet(name) {
//   console.log(`Hello, ${this.name}! I am ${this.job}`);
// }

// const person = {
//   name: 'John',
//   job: 'Developer',
// };

// const greetJohn = greet.bind(person,);

// greetJohn() ;



// const person = {
//   name: 'John',
//   sayHello: function () {
//     console.log(`Hello, ${this.name}! how are you`);
//   }
// };

// const greet = person.sayHello.bind(person);
// greet();

//apply

// const numbers = [1, 2, 3, 4, 5];

// function sum() {
//   return this.reduce((acc, val) =>  numbers);
// }

// const result = sum.apply(numbers);
// console.log(result);

// function greet(n) {
//   console.log(`Hello, ${n}! I am ${job}`);
// }

// const person = {
//   n: 'John',
//   job: 'Developer',
// };

// greet.apply(person, [person.n],[person.job]); 

// function test(...arguments){
//   console.log(this.num, arguments);
// }

// test.apply({num: 100}, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]); 


//call

// function greet(name) {
//   console.log(`Hello, ${this.name}! I am ${this.job}`);
// }

// const person = {
//   name: 'John',
//   job: 'Developer',
// };

// greet.call(person, person);

// function test(arg1, arg2){
//   console.log(this.num, arg1, arg2); 
// }

// test.call({num: 100}, 10, 20)

// const person1 = {
//   name: 'Lakhveer',
//   age : '20'
// };

// const person2 = {
//   name: 'unknon',
//   age : '20'
// };
// const person3 = {
//   name: 'preet',
//   age : '20'
// };

// function sayHello() {
//   console.log(`Hello, ${this.name}! i am ${this.age} year old`);
// }

// sayHello.call(person1); 
// sayHello.call(person2);
// sayHello.call(person3);


        //let
        // let x = 4;
        // {
        //     let x = 1;
        // }
        // document.getElementById("demo").innerHTML=x;

//var
        // var x =10;
        // {
        //     const x =2 ;
        // }
        // document.getElementById("demo").innerHTML=x;


        //const

//         try {
//   const PI = 3.141592653589793;
//   PI = 3.14;
// }
// catch (err) {
//   document.getElementById("demo").innerHTML = err;
// }

//const array

// const cars = ["saab","audi","bmw"];

// cars[0]="thar";
// cars.push("verna");
// document.getElementById("demo").innerHTML=cars;


//arrow function

// const x =(x,y) => x*y;
// document.getElementById("demo").innerHTML=x(25,25);

// hello =()=>"hello world !";
// document.getElementById("demo").innerHTML=hello();


// const handlechange =(a,b=2)=>{
//     console.log(a*b);
// }
// handlechange(30);

//class

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);
// const myCar3 = new Car("Audi", 2019);

// document.getElementById("demo").innerHTML =
// myCar1.name + " " + myCar2.name + "  " +myCar3.year;
// spred oprater
//  const q1 =[ "jan", "feb","mar"];
//  const q2 =[ "apr", "may","jun"];
//  const q3 =[ "july", "aug","sep"];
//  const q4 =[ "oct", "nov","dec"];
//  const year =[...q1,...q2,...q3,...q4];
//  document.getElementById("demo").innerHTML=year;

// const array1 = [1,2,3];
// const array2 =[99,88,66]
// const array3 = [...array1,array2,5,6,7,8,9];
// document.getElementById("demo").innerHTML=array3


// const circle = {
//     radius: 10,
//     style: {
//         color: 'blue'
//     }
// };

// const clonedCircle = {
//     ...circle
// };


// clonedCircle.style = 'red';

// console.log(clonedCircle);

// const obj1 = { 1: 11, 2: 22 };
// const obj2 = { 3: 33, 4: 44 };
// const obj3 = {...obj1,...obj2};


// document.getElementById("demo").innerHTML="this is a object value" + JSON.stringify(obj3) ;
// console.log(obj3);

//rest opreter
// function sum(...theargs){
//     let total =0;
//     for (const arg of theargs){
//         total+=arg;
//     }
//     return total;
// }
// console.log(sum(40,50,90))

// getter or setter
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: " ",
//   course :" ",
// //   get lang() {
// //     return this.language;
// //   },
//   set cours(cours){
//      this.course=cours
// },
// set lang(lang){
//     this.language=lang
// }
// };
// person.language="Punjabi"
// person.course="bsc.it"

// console.log(person.course)
// console.log(person.language)
// document.getElementById(  "demo").innerHTML = person.course;
 

//enhanced object litrals
// const keyName ='name';
// const product ={
//   buy(){
//     document.setElementById("demo");
//   },
// };
// document.getElementById("demo").innerHTML




// elem = document.getElementById('demo')
// elem.innerHTML = x;
// var x;
// x = 5;
// elem = document.getElementById('demo1')
// elem.innerHTML = x;



// Math

// let m =Math;
// console.log(m)
// console.log(Math.E)
// console.log(Math.LN10)
// console.log(Math.LN2)
// console.log(Math.LOG10E)
// console.log(Math.LOG2E)
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)
  

//   Symbol
//  const person ={
        // firstName: "veer",
        // lastName: "singh",
        // age:20,
        // eyeColor: "brown",
        // id: "",
// }
// let id = Symbol("id");
// person[id]=1430
// // // document.getElementById("demo").innerHTML = person[id] + " " + person.id;

//default parameter value

// function myfunction(x,y=10){
//         return x+y;
//         }
//         document.getElementById("demo").innerHTML=myfunction(31)

// rest parameter
// function sum(...args){
//         let sum =0;
//         for (let arg of args)sum+=arg;
//         return sum;
// }
// let x = sum (4,5);
// document.getElementById("demo").innerHTML=x;


// string includes()

// let text = "my name lakhveer singh i am 20 year old i am from hoshiarpur vpo-bainch baja";
// document.getElementById("demo").innerHTML = text.includes("Bainch");

// start with
// let text = "my name lakhveer singh i am 20 year old i am from hoshiarpur vpo-bainch baja";
// document.getElementById("demo").innerHTML = text.startsWith("my");


//end with
// let text = "my name lakhveer singh i am 20 year old i am from hoshiarpur vpo-bainch baja";
// document.getElementById("demo").innerHTML = text.endsWith("baja");

// new number object
// let x =Number.EPSILON;
// document.getElementById("demo").innerHTML=x;


//new mumber method
// document.getElementById("demo").innerHTML=Number.isInteger(10)+"<br>"+Number.isInteger(10.6);

//safe interger

// document.getElementById("demo").innerHTML=Number.isSafeInteger(10)+"<br>"+Number.isSafeInteger(123456789654);

// function warn(x) {
//   if (Number.isSafeInteger(x)) {
//     return 'Precision safe.';
//   }
//   return 'Precision may be lost!';
// } 
// document.getElementById("demo").innerHTML=(warn(Math.pow(2,53)));
// document.getElementById("demo1").innerHTML=(warn(Math.pow(2,53)-1));

// new global method
//isfinite

// document.getElementById("demo").innerHTML=isFinite(10/2)+"<br>"+isFinite(10/0)

// isNaN
// document.getElementById("demo").innerHTML =
// isNaN("Hello") + "<br>" + isNaN("09");

// object entries

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   document.getElementById("demo").innerHTML += x+"<br>";
// }



// Array & Object destructuring

// normal
// var details ={
//         name:"lakhveer singh",
//         contact: 7814331537,
//         email : "lakh5939@gmail.com",
// }
// var name=details.name;
// var contact=details.contact;
// var email=details.email;
// console.log(name);
// console.log(email);
// console.log(contact);

// //es6
// const details ={
//         name:"lakhveer singh",
//         contact: 7814331537,
//         email : "lakh5939@gmail.com",
// };
// let {name,contact,email}= details;
// console.log(name);
// console.log(contact);
// console.log(email);

//with arry
// es5

// const arr =["a","b","c","d","e","f","g"]
// var v1 = arr [0];
// console.log(v1);

//es6
// const arr =["a","b","c","d","e","f","g"]
// let [v1,v2,v3,v4,v5,v6,v7]=arr;
// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(v4);
// console.log(v5);
// console.log(v6);
// console.log(v7);


//import & export


</script>
</body>
</html>