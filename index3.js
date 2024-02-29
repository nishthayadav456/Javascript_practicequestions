
//1
// function fruit(){
//     console.log(name)
//     console.log(price)
//     var name="nishtha"
//     let price=10
// }
// fruit()

//output will be the undefined and cannot accss before initialization because hoisting can perform in var not let

//2
// for(var i=0;i<3; i++){
//     setTimeout(()=>
//         console.log(i)
//         ,1000)
// }

//output is 3 print 3time because in the var it is a global scope 

//3
// for(let i=0; i<3; i++){
//     setTimeout(()=>
//     console.log(i),1)
// }
//output is 0,1,2 because let is a block scope so the loop will run outside the curly bracket

//4
//console.log(+true) 
//console.log(typeof+true) 

//any sign before boolean or string it convert into number answer is 1
//and type of it convert it into number answer is Number

//5
// console.log(!"anshul")
// console.log(typeof("anshul"))
//console.log(!!"anshul")
// output 1- false 
// output 2- string
// output 3- true 


//6
//let data="size";
//const bird={
//  size:"big"
//}
//console.log(bird[data])//data as a key to access the property of the bird object. Since data is equal to "size", it retrieves the value associated with the "size" key, which is "big". Therefore, the output is "big".
//console.log(bird["size"])//the property "size" is accessed directly using square brackets. This also retrieves the value associated with the "size" key, which is "big". The output is "big".
//console.log(bird.size)//size" using dot notation. It retrieves the value associated with the "size" key, which is "big". The output is "big".
//console.log(bird.data)// there is no property named "data" in the bird object, so the output is undefined. The data variable is not used as a dynamic key in this context.

//7
// let n={name:"Anjali"}
// let m;
// m=n
// n.name="nishtha";//change the property of n so m=n both have the same memory reference
// console.log(m.name)

//8
// var x;
// var x=10
// console.log(x)//10

//9
// var x;
// let x=20
// console.log(x)//x already been declared in case of let
//we cannot define with same name beacuse it a global scope

//10
// let a=3
// let b= new Number(10)
// console.log(a==b)//it checks value output is true true (type coercion, b is converted to a primitive value before comparison)
// console.log(a===b)//it checks both value and datatype value is 10 and datatype isobject that y it is false if we have new keyword with number it gives object

//11
// let name;
// nmae={}//typo!
// console.log(name)//output is undefined

//12
// function fruite(){
//     console.log("!woof")
// }
// fruite.name="appple"
// console.log(fruite())

// function fruite(){
//     console.log("!woof")
// }
// fruite.name="appple"
// fruite()//output is woof

//13
// function sum(){
//     return a+b
// }
// console.log(sum(1+"2"))//output is 12
//a is a number and b is a string if we add both it becomes string it return there concatenation

//14
// let number=0;
// console.log(number++)  // Post-increment: Returns the current value of 'number' (0) and then increments it by 1
// console.log(++number) // Pre-increment: Increments 'number' by 1 and then returns the new value (2)
// console.log(number)  // Outputs the current value of 'number' (2)//here no increment that y 2

//15
// function Age(...agrs){
//     console.log(agrs)
// }
// Age(21)
//the output is [21]

// function Age(...agrs){
//     console.log(typeof agrs)
// }
// Age(21)
// output is object

//16
// function getAge() {
//     'use strict';
//     age = 10; // Note: Without 'var', 'let', or 'const', 'age' becomes a global variable in strict mode
//     console.log(age);
// }

// getAge();

//17

// const sum=eval('10*10+5')//eval basically takes string it will make the numeric value
// console.log(sum)
// output is 105- The eval function is used here to dynamically evaluate the provided expression. In this case, it's equivalent to directly assigning the result of the expression:
//In this case, the eval function takes the string '10 * 10 + 5', interprets it as JavaScript code, and executes it.

//18
//how long is cool seceret accessible in our browser?
//sessionStorage.setItem('Nishtha',2000)
//session storage -will auotmatically will remove when u close the browser or close the tab
//local storage- Data is stored for a long time in localStorage even after the browser is closed and reopened.

//19
// const obj={hello:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProperty("hello"))//true
// console.log(obj.hasOwnProperty(2))//true
//obj.hasOwnProperty is a method This is because, in JavaScript, when a number is used as a key in an object, it is automatically converted to a string.

//20-
// const obj={a:"one",b:"two",a:"three"}//key is a,b,a
// console.log(obj)
//output is whole object{a:"three",b:"two"}
//"a" is overwritten by the subsequent value "three",JavaScript objects do not allow duplicate keys, and when you provide the same key multiple times, the last occurrence takes precedence.

//21-
// for(let i=0;i<5;i++){
//     if(i===3)
//     continue

// }
// console.log(i)
//the output is 1,2,4
//When i is equal to 3, the continue statement is executed, skipping the console.log(i) statement.
//In case of var the outpt is 1,2,4 because it is a global scope
//in case of const the output is 1 because in the const hte value ids not reintialize or redeclare.

//22
// const foo=()=>console.log("first")
// const bar=()=>setTimeout(()=>console.log("second"))
// const baz=()=>console.log("third")
// bar()
// foo()
// baz()
// output is first third second settimeout function always runs at last
//Normal function call first then call settimeout function

//23
{/* <div>
<div onClick="console.log('first div')">
<div onclick="console.log('second div')">
<button onclick="console.log('button')">
click me
</button>
</div>
</div>
</div> */}

//24
// const person={
//     name:"nishtha",

// }
// function sayhi(age){
//     return `${this.name} is ${age}`

// }
// console.log(sayhi.call(person,21))//nishtha is 21
// console.log(sayhi.bind(person,21))//return the whole function because in the bind again call the function  i.e console.log(sayhi.bind(person,21()))

//25
// function sayhello(){
//     return (()=>0)()
// }
// console.log(typeof sayhello())
//ouptut is number immediate call after the return

//26
// function sayhello(){
//     return (()=>0)
// }
// console.log(typeof sayhello())
//ouput is function not calling immediate the return function call at last

//27
// console.log(typeof 1)//number number is also a string itself
// console.log(typeof typeof 1)//string

//28
// const number=[1,2,3]
// number[9]=11
// console.log(number)
//[1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, 11]
//indexing 0,1,2,3,4,5,6,7,8,9

//29
// const number=[1,2,3]
// number[9]=number
// console.log(number)
//output is [1,2,3]at infinite time 

//30
console.log(!!null)
console.group(!!"")
console.log(!!1)