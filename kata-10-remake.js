const calculateChange = function(cash, total) {
  let amount = total - cash;
  let change = {};
  if (amount / 2000 >= 1) {
    change.twentyDollar = Math.floor(amount / 2000);
    amount = amount -  change.twentyDollar * 2000;
  }
  if (amount / 1000 >= 1) {
    change.tenDollar = Math.floor(amount / 1000);
    amount = amount -  change.tenDollar * 1000;
  }
  if (amount / 500 >= 1) {
    change.fiveDollar = Math.floor(amount / 500);
    amount = amount -  change.fiveDollar * 500;
  }
  if (amount / 200 >= 1) {
    change.twoDollar = Math.floor(amount / 200);
    amount = amount -  change.twoDollar * 200;
  }
  if (amount / 100 >= 1) {
    change.oneDollar = Math.floor(amount / 100);
    amount = amount -  change.oneDollar * 100;
  }
  if (amount / 25 >= 1) {
    change.quarter = Math.floor(amount / 25);
    amount = amount -  change.quarter * 25;
  }
  if (amount / 10 >= 1) {
    change.dime = Math.floor(amount / 10);
    amount = amount -  change.dime * 10;
  }
  if (amount / 5 >= 1) {
    change.nickel = Math.floor(amount / 5);
    amount = amount -  change.nickel * 5;
  }
  if (amount / 1 >= 1) {
    change.penny = Math.floor(amount / 1);
    amount = amount -  change.penny * 1;
  }
  return change;
};

console.log(calculateChange(787, 1000));
console.log("-----------------------------------");
console.log(calculateChange(832, 2000));
console.log("-----------------------------------");
console.log(calculateChange(2501, 3000));
console.log("-----------------------------------");
console.log(calculateChange(1234, 4000));
console.log("-----------------------------------");