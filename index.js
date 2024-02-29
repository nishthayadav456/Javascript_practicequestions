setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    var AMPM="PM"
    if(h>12){
        h=h-12;
    }
    if(h>=12){
        AMPM="PM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    var time=h+":"+m+":"+s+":"+AMPM;
    document.getElementById('time').innerText=time;
    

},1000);

let q4 = document.getElementById("box4")
q4.addEventListener("click",()=>{
    q4.innerHTML="hello world"
    q4.style.color="red"
})

// let heading =document.querySelector('h3');
// heading.addEventListener('mouseover',()=>{
//     heading.innerText='hello nishu'
// })

//fetch through API-
// let p=fetch("https://goweather.herokuapp.com/weather/LDN")
// p.then((value1)=>{
// return value1.json()
// })
// .then((value2)=>{
//     console.log(value2)
// })
 
//print the Number 1to 5 using promise chaining

// function promiseDisplay(number,Time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(number);
//             res()
//         },Time)
//     })
// }
// promiseDisplay(1,1000)
// .then(()=>
// promiseDisplay(2,1000)
// )
// .then(()=>
// promiseDisplay(3,1000)
// )
// .then(()=>
// promiseDisplay(4,1000)
// )
// .then(()=>
// promiseDisplay(5,1000)
// )

//callback hell-

setTimeout(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)
        setTimeout(()=>{
            console.log(3)
            setTimeout(()=>{
                console.log(4)
                setTimeout(()=>{
                    console.log(5)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

// print 1 to 5 using promise chaining-

//  function display(num,timeout){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log(num);
//             res('promise Resolved')
//         },timeout)
//     })
// }
// display(1,1000)
// .then(()=> display(2,1000))
// .then(()=> display(3,1000))
// .then(()=> display(4,1000))
// .then(()=> display(5,1000))

//asyn/await print 1to5-

  
function delay(num,time){
    return new Promise((res,resj)=>{
        setTimeout(()=>{
        console.log(num)
        res()
        },time)
    })
}
async function demo(){
    for(let i=1;i<=5;i++){
        await delay(i,1000)
    }
}
demo();

//using promise-

// function delay(number, Time) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(number);
//         resolve();
//       }, Time);
//     });
//   }
  
//   function demo() {
//     let promise = Promise.resolve();
  
//     for (let i = 1; i <= 5; i++) {
//       promise = promise.then(() => 
//       delay(i, 1000));
//     }
//   }
  
//  demo();



  //In this code, the delayPrint() function returns a promise that resolves after the specified delay 
  //(in this case, one second or 1000 milliseconds) and prints the provided number to the console.

//The printNumbersFromOneToFive() function sets up a promise chain by initializing the promise with
 //a resolved promise (Promise.resolve()). Inside the for loop, it keeps appending new promises to the chain using 
 //.then(). Each new promise returned by delayPrint() will print the corresponding number and then wait for one second 
 //before resolving, thus creating the desired delay.

//When you run this code, it will print the numbers 1 to 5 to the console,
 //with each number being printed after a delay of one second from the previous one, using promises.

 

//closure-

function outerFun(){
    var outer=100;
    function innerFunc(){
        console.log(outer)
    }
    return innerFunc
}
var value=outerFun()
value();

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//     - Closure is the combination of two function (min).
//     - inner function is able to excess the outer function variable but vise-varsa not possible.
//     - outer func and inner func is going to create a Lixical environment.

// Closures are used in JavaScript to create private variables and methods, which are not accessible from
//  outside the closure. when a function uses variables from outside of its own scope, those variables are "closed over"
//       by    the function and can still be accessed even after the function has finished executing.

//callback-

function demo (sample){
    console.log("hello")
    sample();
}
function demo2(){
    console.log("Welcome")
    
}
demo(demo2)


//First class function-

// function demo(){
//     console.log("hello2")
//     return function sample(){
//         console.log("welcome2")
//     }
// }
// var value= demo()
// value();

//constructor function 

// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// var user1=new User("Nishtha",22);
// console.log(user1)


//hoisting
// console.log(a)
// var a=10
// let b=20;
// console.log(b)

prototype-
function user(name,age){
    this.name=name;
    this.age=age;
}
user.prototype
var value= new user("Nishu",22)
console.log(value)

// function parent(name,age){
//   this.name = name;
//   this.age = age;
// }
// let value = new parent("Ashutosh",43);
// value.__proto__.child = "Debasis";
// console.log(value.name,value.age,value.child);+
// prototype is the function constructor which we want an object to inherit the characters
// where as proto is the default Object which is inherited by every object in the javascript



// pass by value
// let a=10;
// let b = a;
// console.log(a,b); //10 10
// b=30;
// console.log(a,b); //10 30

// pass by reference (only non-primitive datatype jyga)
// let obj = {
//     name:"gopal"
// }
// let obj2 = obj;
// obj2.age = 21;
// console.log(obj,obj2);


//inheritance-
// function user(name,age){
//     this.name=name;
//     this.age=age;
// }
// user.prototype.language="hindi"
// var demo= new user("anjali",21)
// console.log(demo,demo.language)

//self-invoking function
// (function(){
//     var a="hello"
//     console.log(a)
// }
// )();

//call,apply,bind

//call
// let user={
//     name:"nishu",
//     age:22
// }
// function demo(){
//     console.log(this.name,this.age)
// }
// demo.call(user)

//apply
// let user={
//     name:"shubhi",
//     age:22
// }
// function demo(company,position){
// console.log(this.name,this.age,company,position)
// }
// demo.apply(user,["samsung","developer"]);

//bind

// let user={
//     name:"princess",
//     age:22
// }
// function demo(company,position){
//     console.log(this.name,this.age,company,position)


// }
// var value=demo.bind(user,this.name,this.name,"samsung","developer")
// value();

// function EvenOddNumbers(numbers) {
//   return new Promise((resolve, reject) => {
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const oddNumbers = numbers.filter(num => num % 2 !== 0);

//     if (evenNumbers.length > 0) {
//       resolve(evenNumbers);
//     } else {
//       reject(oddNumbers);
//     }
//   });
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// EvenOddNumbers(numbers)
//   .then(evenNumbers => {
    
//     console.log(evenNumbers);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// let a=[10,22,42,11,65]
// let small=Infinity;
// for(let i=0;i<a.length;i++){
//   if(a[i]<small){
//     small=a[i];
//   }
// }
// console.log(small)


//promise
// var demo=new Promise((resolve, reject) => {
//   let a=10;
//   let b=20;
//   if(a===b){
//     resolve()
//   }
//   else{
//     reject()
//   }
// })
// demo.then(()=>{
//   console.log("promise resolved")
// })
// .catch(()=>{
//   console.log("promise rejected")
// })

//using function
// const demo=()=>{
//   return new Promise((resolve,reject)=>{
//     let a=10;
//     let b=20;
//     if(a===b){
//       resolve()
//     }
//     else{
//       reject()
//     }
//   })
// }

// demo().then(()=>{
//   console.log("promise resolve")
// })
// .catch(()=>{
//   console.log("promise rejected")
// })

//promise chaning
// function delay(num,time){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log(num)
//       resolve()
//     },time)
//   })
 
// }
// delay(1,1000)
// .then(()=>delay(2,1000))
// .then(()=>delay(3,1000))
// .then(()=>delay(4,1000))
// .then(()=>delay(5,1000))

//print even number between 1to 20-
// const demo=(num,time)=>{
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   for(let i=1;i<=num;i++)
//   if(i%2===0){
//     console.log(i)
//   }
// }, time);
//   })
// }
// demo(20,1000)



//function currying
// it is a process of taking a function with multiple aruguments and turning into a sequesnce of functions with only a single argument.

// const multi=(a,b,c)=>a+b+c
// console.log(multi(1,2,3))

// const curry=(a)=>(b)=>(c)=>console.log(a+b+c);
// curry(1)(2)(3);

//hoisting from function
// sayhello();
// function sayhello(){
//   console.log("hello")
// }
// a()
// function a(){
//   console.log( "hello1")
// }
// console.log(a)
// var a=10

// asyn await
// function delay(ms) {
//   return new Promise(resolve => 
//     setTimeout(resolve, ms));
// }
// async function performAction() {
//   console.log("Action started");
//   await delay(2000); // Wait for 2 seconds
//   console.log("Action completed after delay");
// }
// performAction();

// function display(alpha,timeout){
//   setTimeout(()=>{
//     console.log(alpha);
//   },timeout);
// }
//   async function visible(){
//   await display ("A",1000);
//   await display ("E",2000);
//   await  display ("I",3000);
//   await display ("O",4000);
//   await display ("U",5000);
// }
// visible();

//pass by value
// let num1=10;
// let num2=num1
// num2=num1+5
// console.log(num1)
// console.log(num2)

//pass by reference
// let obj1={
//   name:"nishtha",
//   age:15,
// };
// let obj2=obj1
// obj2.lastname="yadav"
// console.log(obj1)
// console.log(obj2)

//prototype
// function demo(name,age){
//   this.name=name,
//   this.age=age
// }
// demo.prototype.language="english"
// var value=new demo("nishtha",25)
// console.log(value,value.language)

//fetch API in console
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(json=>console.log(json))


//fetch API render on screen using Map Method-
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
  const users =document.querySelector("#user");
  data.map(e=>{
    const li=document.createElement('li');
    const ui=document.createElement('li')
    li.textContent=e.name;
    ui.textContent=e.email;
    users.appendChild(li);
    users.appendChild(ui)
  })
})
.catch(err=>console.log(err))


//fetch API using For each Method
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>{
//   const users =document.getElementById("user");
//   data.forEach(e=>{
//     const li=document.createElement('li');
//     li.textContent=e.name;
//     li.textContent=e.id;
//     li.textContent=e.username;
//     li.textContent=e.address;
//     li.textContent=e.email;
//     users.appendChild(li);
//   })
// })
// .catch(err=>console.log(err))

//fetchAPI through table
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data )=> {
    
    const UserBody = document.querySelector("tbody");
data.map((e)=>{
  const row=document.createElement("tr")
  const idcell=document.createElement("td");
  const namecell=document.createElement("td");
  const emailcell=document.createElement("td")
  idcell.textContent=e.id;
  namecell.textContent=e.name;
  emailcell.textContent=e.email;

  row.appendChild(idcell);
  row.appendChild(namecell);
  row.appendChild(emailcell);
  UserBody.appendChild(row)
})
    
    })
  
//   .catch((err )=> console.log(err));

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then (response=>response.json())
  // .then(data=>{
  //     let table=document.querySelector('tbody');

  //     data.map((item)=>{
  //     let tr=document.createElement('tr') ;
  //     let td1=document.createElement('td')
  //     let td2=document.createElement('td')
  //     let td3=document.createElement('td')
  //     let td4=document.createElement('td')
      
  //    table.appendChild(tr);
  //    tr.appendChild(td1);
  //    tr.appendChild(td2);
  //    tr.appendChild(td3);
  //    tr.appendChild(td4);
  //    td1.innerText=item.name
  //    td2.innerText=item.username
  //    td3.innerText=item.id
  //    td4.innerText=item.email
  //     })
  // })
  // .catch((err)=>console.log(err))

  // async function fetchData() {
  //    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();
  //      const table = document.getElementById("table");
  //       data.map((e)=> {
  //       const row=document.createElement("tr")
  //        const idcell=document.createElement("td");
  //        const namecell=document.createElement("td");
  //        idcell.textContent=e.id;
  //         namecell.textContent=e.name;
  //         row.appendChild(idcell);
  //         row.appendChild(namecell);
  //         table.appendChild(row)
  //     });
  //   } 
  // fetchData();
  

  //through unordered list

// async function fun1(){
//   let inp= await fetch('https://jsonplaceholder.typicode.com/users')
//  let ans= await inp.json()
//   console.log(ans)
//   return ans ;
// }
// async function fun2(){
// let take= await fun1()
// let list=document.querySelector('#user')
// take.map((item)=>{
//   list.appendChild(li)
//   let li=document.createElement('li')
//   li.innerText=item.name
// })
// }
// fun2()

//pure function 
// function demo(a,b){
  
//   console.log(a+b)
// }
// demo(5,12) //pass the same argument

//datatypes
//number
// let myvar=10;
// console.log(typeof myvar)

//string
// let myvar="nishtha";
// console.log(typeof myvar)

//boolean
// let myvar=true
// console.log(typeof myvar)

//null
// let myvar=null
// console.log(typeof myvar)

//undefined
// let myvar=undefined
// console.log(typeof myvar)

//object
// let obj={
//   name:"nishtha",
//   age:22
// }
// console.log( typeof obj)

//array
// let arr=[1,2,3]
// console.log(typeof arr)

//type of conversion
//Explicit (changes happen automatically)
// const str="42"
// const number=(str)
// console.log(number)

//Implicit(changes done manually by user)
// const number=42
// const str="the number is"+ number
// console.log(str)


//type of coersion
// let myvar="321"
// let num=25
// console.log(myvar+num)

//local storage
// localStorage.setItem("name" ,"nishtha")
// let name1=localStorage.getItem("name");
// console.log(name1)

// sessionStorage.setItem("sessionname" ,"nishtha")
// sessionStorage.setItem("sessionname2" ,"shubhi")

//cookies
// document.cookie="name=nishtha"
// document.cookie="name=isha"

// console.log(document.cookie)


var expiry=new Date(new Date().getTime +1*24*60*60*1000).toUTCString()
//creating a cookie
document.cookie=`name=ABC;expire=${expiry};path=/`
//updating a cookie
document.cookie=`name=ABC1;expire=${expiry};`


//path is used ki home page pr hi rhega 
//1 is for  1day 60min. 60sec. 1000milisecond 
//gettime mean abhi ka time


//addEventListener

// document.getElementById("submit")
//.addEventListener("click",function(){
  //alert("Hello World !!")
//  });

//RemoveEventListener
//  document.getElementById("submit")
//  .removeEventListener("click",function(){
//   alert("Hello World !!")
// });

//eventhandler
//  function myfun(){
//   console.log("hello world")
//  }


// const N = 4;

// for (let i = 1; i <= N; i++) {
//   let pattern = '';

//   for (let j = 1; j <= i; j++) {
    
//     pattern += ' * ';
//   }

//   console.log(pattern);
// }

// let grandparent=document.getElementById("grandparent")
// let parent=document.getElementById("parent")
// let child=document.getElementById("child")

// grandparent.addEventListener("click",()=>{
//   console.log("grandparent")
  
// },true)
// parent.addEventListener("click",()=>{
  
// console.log("parent")
// },true)
// child.addEventListener("click",()=>{

//   console.log("child")
// },true)


//pattern
// for(let i=1;i<=5;i++){
//   for(let k=1;k<=5-i;k++){
//     document.write("&nbsp")
//   }

//   for(let j=1;j<=i;j++){
//    document.write(" * ")
//   }
//   document.write ("<br/>")
// }

//DOM create
// function myfun(){
//   document.getElementById("mm").innerText="hello"
// }

// function clock(){

// }
  
//NCO operator
// let obj={
//  score:0,
// }
// let mess= `your score is ${obj.score ?? 10}`;
// console.log(mess)

//clock

function demo(){
  setInterval(()=>{
    
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds()
    let ampm="PM"
    if(h>12){
      h=h-12
    }
    if(h>=12){
      ampm="AM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    var time=h+":"+m+":"+s+":"+ampm
    document.getElementById("time").innerText=time;
    demo()
  },1000)
}
  
  



// let heading=document.getElementById("time")
// function clock(){
//   let time=new Date().toLocaleTimeString();
//  heading.innerText=time
//  setInterval(()=>{
//   clock()
//  },1000)
 
// }

let a=document.getElementById("rtxt")
a.addEventListener("click",()=>{
  a.innerText="welcome to the world"
})

let changetext=document.getElementById("demo")
function myfun(){
  changetext.style.color="red"
}
//  let b=document.getElementById("demo")
//  b.addEventListener("click",()=>{
//   b.style.color="red"
//  })

let c=document.getElementsById("parent")
let count=true;
function change(){
  if(count){
    parent.style.display="block"
    count=false;
  }
  else{
    parent.style.display="flex"
    count=true;
  }
}
