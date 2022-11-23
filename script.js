//-----------davaleba 1---------//

function res(a, b) {
  if (a === b) {
    return "tolia";
  } else {
    return "ar aris toli";
  }
}
console.log(res(5, 5));

//-----------davaleba 2---------//

function farToCels(temp) {
  let cels = ((temp - 32) * 5) / 9;
  if (typeof temp !== "number") {
    return false;
  } else {
    return "celsius is " + cels.toFixed(1) + "°";
  }
}
console.log(farToCels(132));

//-----------davaleba 3---------//

function calc(a, b, operation) {
  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  if (typeof a !== "number" || typeof b !== "number") {
    return "შეცდომაა,გთხოვთ შეამოწმოთ რიცხვების სისწორე";
  } else if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) 
  {
    return "შეცდომაა,გთხოვთ შეამოწმოთ ოპერაციის სისწორე";
  } else {
    return result;
  }
}
console.log(calc(9, 8, "/"));
