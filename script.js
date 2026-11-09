
let fullName = "Christian";
let lastName = "Friday";

let monthlySalary = 180000;
let transport = 25000;
let feeding = 40000;
let internet = 10000;
let electricity = 15000;
let entertainment = 12000;

let expenses = transport + feeding + internet + electricity + entertainment;
let savings = monthlySalary - expenses;
let moneyRemaining = monthlySalary - expenses - savings;
let feedingPercentage = (feeding / monthlySalary) * 100;

console.log(`Name: ${fullName} ${lastName}`); 
console.log(`Total expenses: ${expenses}`);
console.log(`Savings: ${savings}`);
console.log(`Money remaining: ${moneyRemaining}`);
console.log(`Percentage of salary spent on feeding: ${feedingPercentage.toFixed(2)}%`);


console.log("====================================");
console.log("MONTHLY FINANCIAL REPORT");
console.log("====================================");
console.log(`Name: ${fullName}`);
console.log("------------------------------------");

console.log(`Monthly Salary:     ₦${monthlySalary.toLocaleString()}`);
console.log("");
console.log("EXPENSES");
console.log(`Transport:          ₦${transport.toLocaleString()}`);
console.log(`Feeding:            ₦${feeding.toLocaleString()}`);
console.log(`Internet:           ₦${internet.toLocaleString()}`);
console.log(`Electricity:        ₦${electricity.toLocaleString()}`);
console.log(`Entertainment:      ₦${entertainment.toLocaleString()}`);
console.log("------------------------------------");

console.log(`Total Expenses:     ₦${totalExpenses.toLocaleString()}`);
console.log(`Planned Savings:    ₦${savings.toLocaleString()}`);
console.log(`Money Remaining:    ₦${moneyRemaining.toLocaleString()}`);
console.log("------------------------------------");

console.log(`Percentage Spent:   ${expensesPercentage.toFixed(2)}%`);
console.log(`Percentage on Food: ${feedingPercentage.toFixed(2)}%`);
console.log(`Percentage Saved:   ${savingsPercentage.toFixed(2)}%`);
console.log(`Percentage Left:    ${remainingPercentage.toFixed(2)}%`);

console.log("====================================");


let myName = "Christian";
let age = 50;

let can_code_javaScript = true;

console.log(`Hello, My name is ${myName}....on ...$${age} years old and I can code js....${can_code_JavaScript}
