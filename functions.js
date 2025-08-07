1)function greeting()
   {
    let name = document.getElementById("name").value;
    console.log("Hello,"+name+ "!welcome to javascript");
   }
     greeting("name");
2)function square()
{
    let num=document.getElementById("num").value;
    let result=num*num;
    console.log("square of" +num+ " is " + result); 
}
square("num")

3)let add=function(a,b){
    return a+b;
}
console.log(add(6,7));

4)  console.log((function()
    {
        return "Learning is fun!";
    })());

5)const multiply=function(a,b){
            return a*b;
        }
    console.log(multiply(10,5))

6)const even=function(num){
            return num%2==0;
        }
        console.log(even(2));

7)const square=(num) =>
        num*num;
        console.log(square(2))


8) const sayGoodbye=() =>
             "Goodbye!";
        
        console.log(sayGoodbye());


9)const sub=(a,b)=>{
    return a-b;
}
console.log(sub(6,7));


10)function operate(a, b, func) {
  return func(a, b);
}
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(5, 3, add));      
console.log(operate(5, 3, multiply)); 


12)function addTen(num) {
  return num + 10;
}

console.log(addTen(5));


13)function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); 


14)    function countDown(n) {
  if (n <= 0) { 
    console.log("Countdown finished!");
    return;
  }
  console.log(n);
  countDown(n - 1); 
}
countDown(10);


15)function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

16)
  function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}
const greetAlice = createGreeting("Alice");
greetAlice(); 

