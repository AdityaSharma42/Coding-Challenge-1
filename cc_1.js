//task 1

let employeeName= "Steve Fleming";
const employeeID= 479;
var isActive= true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

//task 2

let products = ["water bottle", "brita jug", "brita filter"];
const productDetails={
    name: products,
    price: 120,
    inStock: true,
}
console.log (products, productDetails);

//task 3

let accountBalance= 70000;
console.log (accountBalance);
// 5000 has been deposited into the account
accountBalance+= 5000;
console.log ('Balance after deposit:',accountBalance);
//10000 has been withdrawed from the account
accountBalance-= 10000;
console.log('Balance after withdrawal:',accountBalance);
//A 4.5% savings interest has been applied to the account
accountBalance *= 1.045
console.log('Balance after interest:',accountBalance);
// A shareholder receives 50% of the balance
accountBalance /= 2
console.log ('Balance after shareholder gets their share:',accountBalance);
// The remaining balance is split amongst 19 people and the remainder stays in the balance
accountBalance %= 19
console.log ('Remaining balance after splitting the money:',accountBalance);

//task 4

let employeeScore1= 71
let employeeScore2= 74

console.log('Employee 1 has a higher score than Employee 2:', employeeScore1> employeeScore2);
console.log ('Employee 1 has a lower score than Employee 2:',employeeScore1< employeeScore2);
console.log ('Employee 1 has a score that is greater than or equal to that of Employee 2:', employeeScore1>= employeeScore2);
console.log ('Employee 1 has a score that is less than or equal to that of Employee 2:', employeeScore1<= employeeScore2);
console.log ('Employee 1 has a score that is stricly equal to that of Employee 2:', employeeScore1===employeeScore2);
console.log ('Employee 1 has a score that is strictly not equal to that of Employee 2:', employeeScore1!==employeeScore2);

//task 5

let hasKeyCard= false;
let hasPermission= true;

let SpecialAccess= hasKeyCard && hasPermission;
console.log ('Has special access:',SpecialAccess);

let GeneralAccess = hasKeyCard || hasPermission;
console.log('Has general access:', GeneralAccess);

let noKeyCard = !KeyCard;
console.log ('No keycard:', noKeyCard);

let noPermission= !hasPermission;
console.log ('No permission:', noPermission);

