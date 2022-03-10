// empty object 
let obj ={};
console.log(obj);

let objArsh={                                       // {} means object hai
    "Name" : "Arsh",                             // Key: Value      Key by default string hi hogi 
    "Age" : 20,
    "phone_number" : 8708352485,
    lastName : 'Kaur'                         // ""  ni bhi lgate to bhi koi prblm ni vo string hi leta hai by default
};

console.log(objArsh);
console.log(objArsh.phone_number);


let capAmerica=
{
    Name : 'Steve',                                      // string
    Age : 9999,                                          // number
    Friends : ['Dolle','Arsh','Gaurang','Noni'],         // array
    address : 
    {                                          // object 
        city : "Ambala",
        state : "haryana",
    },
    isAvenger:false,
    sayHi: function()
    {
    console.log("Cap America says Hiiii")
    }
}

console.log(capAmerica);



// name of capAmerica
console.log(capAmerica.Name)           // ; na bhi lgao to bhi chl jayega
console.log(capAmerica.Age)
console.log(capAmerica.Friends)
console.log(capAmerica.address)
console.log(capAmerica.result)       // agr key ni hogi to undefined likh dega



// city 
console.log(capAmerica.address.city)


console.log(capAmerica.Friends[2])


// sayHi function

console.log(capAmerica.sayHi)             // yha Cap America says Hiiii ni likha aayega kyu??? hmne function call thodi kiya hai
console.log(capAmerica.sayHi())           // yha likha aayega but undefined bhi aayega vo kyu???????



// function kuch return thodi kr rha hai to console hta do
capAmerica.sayHi()

console.log("object before update : ",capAmerica)


// add a new key to object
capAmerica.Movies=['Avenger','Civil War','Endgame'];
console.log("object after update : ",capAmerica) // , se ya + se dono se separate kr skte hai



// delete a key
delete capAmerica.Movies;
console.log(capAmerica)




// change bhi kr skte hai key ki value me
capAmerica.isAvenger=true;
console.log(capAmerica)

capAmerica.address.state='New York'
console.log(capAmerica)



// key access krne ka tarika ek to dot(.) se krte hai 
// SECOND METHOD TO ACCESS A KEY

console.log(capAmerica.Name);       // 1  // isme . ke baad vo key ko by default string consider krta hai
console.log(capAmerica['Name']);    // ye variable smjhta hai

// 2  // isme hme usko btana pdta hai ki string hai '' lga kr
// nhi to vo error de dega

console.log(capAmerica['address']['city'])


