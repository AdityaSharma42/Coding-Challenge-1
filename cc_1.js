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
    name: Hydroflask,
    price: 40,
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

