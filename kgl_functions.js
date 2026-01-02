// creation of a function
function calculateProcurementCost(tonnageInKg,pricePerKg){

return tonnageInKg*pricePerKg;
if(typeof tonnageInKg!==Number||typeof pricePerKg!==Number||tonnageInKg<0||pricePerKg<0)
    {
    console.log("Invalid Input");
}
}
// arrow function
const validateBuyername =(buyerName) =>
    {
   if(buyerName.trim().length>=2 && buyerName!==""){

    return true;
   }
    return false;
 
}

//
function checkUserAuthorization(role){

    switch(role){

        case'Manager':
        return "procurement_and_sales";
        
        case'Sales Agent':
        return "sales_only";
        
        case'Director':
        return "view_aggregations";

        default:
            return "authorized";
    }
}
// Object creation and manipulation

function createSalesRecord(produceName,tonnage,buyerName, amountPaid){

   return {
    id:Math.floor(Math.random()*9000)+1000,//generate random number 1000-9999
    produceName: produceName,
    tonnageInKgs:tonnage,
    buyerName:buyerName,
    amountPaid:amountPaid,
    saleDate: new Date(),
    IsCreditSale:false
};
}
// Creating sales record object
const salesRecord=createSalesRecord(
    3000,
    "CHRIST",
    "Maize",
    150000
);
// adding a new property location using dot notation
salesRecord.Location="Maganjo";
// adding dueDate using
//salesRecord[dueDate]="2025-12-31";
// modify isCreditSale to true 
salesRecord.IsCreditSalesCreitSale=true;

// use of object.keys
const propertyNames=Object.keys(salesRecord);
console.log("Property Names:", propertyNames);
// for...in loop
for(let property in salesRecord)
{
    console.log(`property:${property}, value:${salesRecord[property]}`);
}

// create an array of daily procurements
let weeklyTonnage=[1200,1500,980,2000,1100,1800,1300];
totalTonnage=0
//culculate tonnage
for (let i=0;i<weeklyTonnage.length;i++){
totalTonnage+= weeklyTonnage[i]
}

// average
let averageTonnage=totalTonnage/weeklyTonnage.length;

// prints out the total and the average
console.log("Total weekly Tonnage:",totalTonnage);
console.log("Average daily Tonnage:",averageTonnage);
// array of sales records
let salesrecords=[

    createSalesRecord("Beans",20,5000,true),
    createSalesRecord("Maize",30,3000,false),
    createSalesRecord("Rice",40,5000,false),
    createSalesRecord("Beans",50,5000,true),
];

let creditSalesCount=0;
// credit sales 
for (let record of salesrecords){
    if(record.IsCreditSalesCreditSale=== true){
        continue;
    }
    creditSalesCount++;
}
console.log("Total credit Sales:",creditSalesCount);
// create an array inventory
let inventory=[{name:'Beans',tonnage:500},
    {name:'Maize',tonnage:0},
{name:'G-nuts',tonnage:300}
];
for(i=0; i<inventory.length;i++){
    if(inventory[i].tonnage===0){
        console.log(`Manager Alert:${inventory[i].name} is out of stock`);
        break;
    }
}
