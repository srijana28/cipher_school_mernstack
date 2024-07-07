var x=10;
{
    let x=2;//let has block scope while var has global scope
    console.log(x);
    const y=5;//const variable value cannot be changed else it will give error
    console.log(y);
    //y=22;
}
console.log(x);

//Function are of two types 1. Normal Function and 2. Arrow Function
var a=function(x,y){
    return x+y;
};
console.log(a(5,6));//calling normal function

//Arrow Function
const y=(x,y)=>{
    return x+y;
};
console.log(y(5,6));

//spread operator ...
const q1=["Jan","Feb","Mar"];
const q2=["Apr","May","Jun"];
const q3=["Jul","Aug","Sep"];
const q4=["Oct","Nov","Dec"];
const year=[...q1,...q2,...q3,...q4];
console.log(year);

const mynumbers=[25,12,50,77,-1];
let max=Math.max(...mynumbers);
console.log(max);

//For of Loop
let sum=0;
for(let num of mynumbers)
    {
        sum+=num;
    }
    console.log(sum);
//Loop for string
let name="Cipherschools";
let text="";
for(let ch of name)
    {
        text+=ch+" ";
    }
    console.log(text);

//Map objects
const fruits=new Map([["apple",500],["bananas",300],["oranges",200]]);
console.log(fruits);
console.log(fruits.get("oranges"));

//Set objects
const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("a");//set uses hashing and does not add the duplicate elements
console.log(letters);

//Javascript classes
//Javascript classes are the templates for the objects
class car{
    constructor(name, mfgYear)
    {
        this.name=name;
        this.mfgYear=mfgYear;
    }
}
const mycar1=new car("Mercedes",2020);
const mycar2=new car("Porsche",2022);
console.log(mycar1,mycar2);

//Javascript Promise is a javascript object that links the producing code with the consuming code
const myFunction=()=>{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("This is inside a Promise");
            resolve();
        },2000);
    });
};
myFunction()
.then(()=>{
console.log("resolved");
})
.catch(()=>
{
    console.error("Rejected");
});

//Javascript Symbols: they are the primitive datatypes like numbers and are always the unique identifiers
const person={
    firstName:"John",
    lastName:"Doe",
    age:30,
    eyeColor:"blue",
};
let id=Symbol("id");
person[id]=140111;
console.log(person);

//Default parameters values
const addTwoNumbers=(a,b=10)=>a+b;
console.log(addTwoNumbers(10));//when the second parameter is not provided the value of b is 10

//Rest parameter: allows indefinite number of parameters
const addNumbers=(...args)=>{
    let sum=0;
    for(let arg of args)
        {
            sum+=arg;
        }
        return sum;
};
console.log(addNumbers(10,14,16,22,1,45));