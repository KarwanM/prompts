/* -------------------------  Functions  ------------------------- */

const result = document.getElementById("functions");

// Hello user

let name = "James";

const greeter = (name) => {
  return "Hello " + name;
};

let myGreeting = greeter(name);

const element1 = document.createElement("p");
const node1 = document.createTextNode(myGreeting);
element1.append(node1);
result.appendChild(element1);

console.log(greeter(name));

// What type

let typeOf = "hello";
const checkType = (typeOf) => {
  return "The type of " + typeOf + " is " + typeof typeOf;
};

const element2 = document.createElement("p");
const node2 = document.createTextNode(checkType(typeOf));
element2.append(node2);
result.appendChild(element2);

console.log(checkType(typeOf));

// Check length

let length = "Hello Javascript!";

const checkLength = (length) => {
  return "The length of " + length + " is " + length.length;
};

const element3 = document.createElement("p");
const node3 = document.createTextNode(checkLength(length));
element3.append(node3);
result.appendChild(element3);

console.log(checkLength(length));

// Sum of two numbers

let num1 = 9;
let num2 = 8;
let num3 = 3;
let num4 = 4;

const addTwoNumbers = (num1, num2) => {
  return (sum =
    "The Sum of " + num1 + " + " + num2 + " is equal to: " + (num1 + num2));
};

const element4 = document.createElement("p");
const node4 = document.createTextNode(addTwoNumbers(num1, num2));
element4.append(node4);
result.appendChild(element4);

console.log(addTwoNumbers(num1, num2));

// Add and Multiply

const addAndMultiply = (num1, num2, num3, num4) => {
  let firstTwoNum = num1 + num2;
  let secondTwoNum = num3 + num4;

  let multiply = firstTwoNum * secondTwoNum;

  return (
    "Multiply of the Sum of " +
    num1 +
    " + " +
    num2 +
    " which is " +
    firstTwoNum +
    " and the Sum of " +
    num3 +
    " + " +
    num4 +
    " which is " +
    secondTwoNum +
    " is equal to " +
    multiply
  );
};

const element5 = document.createElement("p");
const node5 = document.createTextNode(addAndMultiply(num1, num2, num3, num4));
element5.append(node5);
result.appendChild(element5);

console.log(addAndMultiply(num1, num2, num3, num4));

// Larger than

const checkLarger = (num1, num2) => {
  if (num1 > num2) {
    return "Number " + num1 + " is larger than Number " + num2;
  } else if (num1 < num2) {
    return "Number " + num2 + " is larger than Number " + num1;
  } else {
    return "Number " + num1 + " is equal to Number " + num2;
  }
};

const element6 = document.createElement("p");
const node6 = document.createTextNode(checkLarger(num2, num4));
element6.append(node6);
result.appendChild(element6);

console.log(checkLarger(num1, num2));

// Sum of elements

let array = [5, 8, -3, 6, 4, -9, 10];

const addArrNum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return "The Sum of [ " + array + " ] is equal to " + sum;
};

const element7 = document.createElement("p");
const node7 = document.createTextNode(addArrNum(array));
element7.append(node7);
result.appendChild(element7);

console.log(addArrNum(array));

// Squaring a number

const squareNum = (num1) => {
  return "The square number of " + num1 + " is " + Math.sqrt(num1);
};

const element8 = document.createElement("p");
const node8 = document.createTextNode(squareNum(num1));
element8.append(node8);
result.appendChild(element8);

console.log(squareNum(num1));

// Odd or Even

const oddOrEven = (num1) => {
  if (num1 % 2 === 0) {
    return "Number " + num1 + " is an Even number";
  } else {
    return "Number " + num1 + " is an Odd number";
  }
};

const element9 = document.createElement("p");
const node9 = document.createTextNode(oddOrEven(9));
element9.append(node9);
result.appendChild(element9);

console.log(oddOrEven(num1));

// Sum of positive

const sumOfPositive = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return "The Positive sum of [ " + array + " ] is equal to " + sum;
};

const element10 = document.createElement("p");
const node10 = document.createTextNode(sumOfPositive(array));
element10.append(node10);
result.appendChild(element10);

console.log(sumOfPositive(array));

/* -------------------------  DOM Manipulation  ------------------------- */

let text = document.getElementById("userInput");
let domResult = document.getElementById("domResult");

const checkDomText = (text) => {
  let isLowerCase = false;
  let isUpperCase = false;
  let isTwoNum = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() === text[i]) {
      isUpperCase = true;
    }
    if (text[i].toLowerCase() === text[i]) {
      isLowerCase = true;
    }
    if (!isNaN(text[i])) {
      isTwoNum += 1;
    }
  }

  if (
    isLowerCase === true &&
    isUpperCase === true &&
    isTwoNum > 1 &&
    text.length > 5
  ) {
    return true;
  } else {
    return false;
  }
};

const onClickDOM = () => {
  console.log(checkDomText(text.value));
  domResult.innerHTML = "The result is " + checkDomText(text.value);
  text.value = text.value;
};

/* -------------------------  Array  ------------------------- */

let inputTxt = document.getElementById("inputText");
let radioFilter = document.getElementById("filter");
let radioReduce = document.getElementById("reduce");
let arrayResult = document.getElementById("arrayResult");

const onClickArray = () => {
  let arrInput = inputTxt.value.split(",");
  arrayResult.innerHTML = "";

  if (!inputTxt.value) {
    return (arrayResult.innerHTML =
      "Please enter numbers separated by comma , ...");
  } else {
    if (radioFilter.checked) {
      let filterAll = [];
      filterAll = arrInput.filter((arr) => {
        if (0 < parseInt(arr) && parseInt(arr) % 2 === 0) {
          return arr;
        }
      });
      arrayResult.innerHTML =
        "The result of [ " + arrInput + " ] is [ " + filterAll + " ]";
    }

    if (radioReduce.checked) {
      arrayResult.innerHTML =
        "The result of [ " +
        arrInput +
        " ] is " +
        arrInput.reduce((total, arr) => {
          if (arr === "" || isNaN(arr)) {
            arr = 0;
          }
          return total + parseInt(arr);
        }, 0);
    }
  }
};

/* -------------------------  Objects  ------------------------- */

// Capitalise keys

const keysAndValues = {
  Hello: 1,
  age: 2,
  c: 3,
};

const capitaliseKey = (keysAndValues) => {
  Object.keys(keysAndValues).map((key, value) => {
    keysAndValues[key.toUpperCase()] = value;
    delete keysAndValues[key];
  });
  return keysAndValues;
};

console.log(capitaliseKey(keysAndValues));

// String to Object

const newString = "a:1, b:hi, 5:hello";

let objectFromString = {};

const stringToObject = (string) => {
  if (string) {
    let splitString = string.split(",");
    splitString.map((str) => {
      let x = str.split(":");
      objectFromString[x[0].trim()] = x[1];
    });
  } else {
    objectFromString = {};
  }
  return objectFromString;
};

console.log(stringToObject(newString));

// Going shopping

const list = "2 tomatos, 1 egg, 3 pumpkins";
let listObject = {};

const shoppingList = (list) => {
  let splitList = list.split(",");
  splitList.map((str) => {
    let trimList = str.trim();
    let x = trimList.split(" ");
    listObject[x[1]] = parseInt(x[0]);
  });
  return listObject;
};

console.log(shoppingList(list));
