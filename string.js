let str="I am arsh";
console.log(str);

// length of string

let len=str.length;
console.log(len);

// sliced method
let sliceString=str.slice(2,8);                // kuch return krta hoga tbhi store kiya hai 
// start index included last not included
// extract krta hai kuch part
console.log(sliceString);



// replace method
let replaceString=str.replace("am" ,"was");
console.log(replaceString);      // new string milti hai
console.log(str);       // original string ni change hoti


let upperCase=str.toUpperCase();
console.log(upperCase);
console.log(str);


let lowerCase=str.toLowerCase();
console.log(lowerCase);
console.log(str);


// concate

let firstName="Arsh";
let lastName="Kaur";

let fullName=firstName.concat(lastName);
console.log(fullName);


// or
let full=firstName+lastName;
console.log(full);



console.log(str.charAt(3));

// split
let splitString=str.split(" ");            // comma k base pr split ya jo ap doge

// split array return krta hai
console.log(splitString);

// and much more...........................................




/*HOME WORK 
trim padhna hai apply krna hai    */                   