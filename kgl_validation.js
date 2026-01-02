
// Declaration of variables
const companyName="Karibu Gloceries LTD";// The companyname does not change
const minimunTonnage= 1000;// const is used because minimumTonnage fixed
const isOperational=true;// the value will not change it musb be true
let ManagerName;// ManagerName maybe assigned or changed that is why  let is used
const closeBranches=null; // This intentionaly empty  

/*Using of typeof to check and log
the  data type of each variable
*/
console.log(typeof companyName)
console.log(typeof minimunTonnage)
console.log(typeof isOperational)
console.log(typeof ManagerName)
console.log(typeof closeBranches)

let dealerNameInput=" james BOND "//Declaration of a variable

/* this code removes the leading and trailing whitespace
Converts the cleaned name to proper title case
Stores the result in a new variable in cleandealerName
*/
let cleanDealerName=dealerNameInput.trim().toUpperCase();

//Logs the result using a template literal 

console.log(`Clean Dealer Name:${cleanDealerName}`);
if(cleanDealerName.length>=2){

    console.log("Valid dealer Name")
}
else{

    console.log("Invalid dealer Name ")
}

//Conditional Logic and Business Rules
// declaring variables for procurement 
let userRole='Sales Agent';
let procurementTonnage= 1500;
let produceType='Beans'
let costInUgx='50000';

if(userRole==='Sales Agent'){

console.log("Error: No Sales Agent is allowed to record any produce entry")

}

// when the userRole is not  Sales

else {
    // converting to  a Number
let costNumber=Number(costInUgx);

let isValidProcurement=procurementTonnage>=1000 && costNumber>=10000;

 if(isValidProcurement){


console.log("procurement record valid"); 
}
else{

 console.log("procurement Record invalid");
}

}
// Arrays and Produce Management
let kglProduce=['Beans','Grain Maize','Cow peas','G-nuts','Soybeans'] //creation of an array
kglProduce.push('Green Peas');// Add element at the end of the array
kglProduce.includes('G-nuts');// checks whether G-nuts exist
kglProduce.shift();// Removes the first elements in the array
console.log(kglProduce);// prints out the elements
console.log(kglProduce.length)// prints out the lenth of the array
// array
branch2Produce=['Maize','Beans']
let allProduce=kglProduce.concat(branch2Produce);// combine elements of two arrays together
console.log(allProduce)//prints all together after concatination

