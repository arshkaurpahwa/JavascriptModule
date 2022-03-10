// function in js without pparameter and without return type
function sayHello(){
    console.log("hello");
}

sayHello();


// function with parameter
sum(6,7);
function sum(num1,num2)
{
    let add=num1+num2;
    console.log("addition of given numbers : "+ add);
}

//sum(6,7);


// function with return type
function multiply(num1,num2)
{
    return num1*num2;
}

let result=multiply(6,7);
console.log(result);



// function store krvadiya variable me

                                                             /* INTERVIEW QUESTION
                                                        function are first class citizen in js 
                                                     bcz function ko hm variable me store kr skte hai*/
let a=function sub(num1,num2){
    return num1-num2;
}

console.log(a(7,6));
console.log(a);



                                                   // IIFE -> Immediately Invoked Function Expression
/* normail function likho name mt do then starting m opening bracket then closing last m fe ek opening closing yhi calling hai */ 
// alg se call krne ki zrurt ni
// declare krte hi call krte hai
// use case - > bs ek hi baar call krna ho
// name isiliye ni hai kyuki baad m call nhi krna hai

(function(){
    console.log("hello");
})();

// INFE with parameter
(function(num1,num2)
{
    console.log(num1/num2);
})(10,5);




