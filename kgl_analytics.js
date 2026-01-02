// array of procurement
procurementrecords=[
{
id:1,
dealerName:"CHRIST",
produceType:"Beans",
tonnageInKgs:1_500,
costInUgx:500_000,
procurementDate: new Date("2025-09-01"),

},

{
id:2,
dealerName:"Alain",
produceType:"Grain Maize",
tonnageInKgs:2_000,
costInUgx:600_000,
procurementDate: new Date("2025-09-03"),

},
{
id:3,
dealerName:"Baharawe",
produceType:"Rice",
tonnageInKgs:3_000,
costInUgx:800_000,
procurementDate: new Date("2025-09-05"),

},{
id:4,
dealerName:"FERDINAND",
produceType:"G-Nuts",
tonnageInKgs:4_000,
costInUgx:900_000,
procurementDate: new Date("2025-09-07"),

},
{
id:5,
dealerName:"JOHN",
produceType:"soyBeans",
tonnageInKgs:5_000,
costInUgx:950_000,
procurementDate: new Date("2025-09-01"),

},
{
id:6,
dealerName:"CYNTHIA",
produceType:"Green Peas",
tonnageInKgs:1_500,
costInUgx:500_000,
procurementDate: new Date("2025-09-01"),

},
]
// using map() and add
const recordWithCostPerKg= procurementrecords.map(record =>({...record, costPerKg:record.costInUgx/record.tonnageInKgs}));
console.log("Records with perKg:",recordWithCostPerKg);

//.filter()

const qualifiedProcurements=procurementrecords.filter( record =>record.tonnageInKgs>=1000);

console.log("Qualified Procurements:", qualifiedProcurements)
console.log(`Number of Qualified records: ${qualifiedProcurements.length}`);

// .reduce()

const totals=procurementrecords.reduce((accumulator, record) =>{

    accumulator.tonnage+= record.tonnageInKgs;
    accumulator.totacost+= record.costInUgx;
    return accumulator;
},
{
    totalTonnage:0,totacost:0
}
);

console.log(`Total Tonnage: ${totals.tonnage} Kgs`);
console.log(`Total Cost : ${totals.totacost} UGX`);
// use Set to remove duplicates names

function getUniqueDealers(records){
const dealerSet = new Set(records.map(r => r.dealerName));
    return Array.from(dealerSet);// convert setback to array
}
console.log("Unique Dealers:",getUniqueDealers(procurementrecords))

const authorizedRoles= new Set(["Manager","Director"]);

//. has() checks if the value exists in the set
function isAuthorizedForProcurement(userRole){
return authorizedRoles.has(userRole);
}

console.log("Manager:", isAuthorizedForProcurement("Manager"));
console.log("Director:",isAuthorizedForProcurement("Director"));
console.log("Clerk:",isAuthorizedForProcurement("Clerk")); 

//map stores produce prices key vakue pairs

const kglPriceList = new Map([
    ["Beans",5500],
    ["Grain Maize",4800],
    ["Cow Peas",6000],
    ["G-nuts",7200],
    ["Soybeans",5800]
]);
// a function to retrieve price
function calculateSaleTotal(produceName,tonnageInKgs
){
if(!kglPriceList.has(produceName)){
    return " Price not found";
}
return kglPriceList.get(produceName)* tonnageInKgs;
}

console.log("Beans:",calculateSaleTotal("Beans",1500));
console.log("soyBeans:",calculateSaleTotal("soyBeans",1000));
console.log("Rice:",calculateSaleTotal("Rice",500));

// find the highest price

let highestPrice=0;
let highestProduce="";
 for( const[produce,price] of kglPriceList){

    console.log(`Produce:${produce},Price per Kg:${price} Ugx`);
    if(price>highestPrice){
        highestPrice=price;
        highestProduce=produce;
    }
 }
console.log(`Highest priced Produce:${highestProduce} at ${highestPrice} Ugx per Kg`);