// Tudo é objeto
const menu = {
  selector: ".main",
};

console.log(menu.selector.toUpperCase());

// Arrow Function
const upperName = (name) => {
  return name.toUpperCase();
};
// console.log(lowerName("eduardo"));

const lowerName = (name) => name.toLowerCase();

console.log(upperName("eduardo"));

// Destructuring
// function handleMouse(event) {
function handleMouse({ clientX, clientY }) {
  // const {clientX, clientY} = event;
  console.log(clientX, clientY);
}

document.addEventListener("click", handleMouse);

const fruits = ["banana", "grape"];
const [fruit1, fruit2] = fruits;
console.log(fruit2, fruit1);

const useSquare = [
  4,
  function (side) {
    return 4 * side;
  },
];

const [sides, perimeter] = useSquare;
console.log(sides);
console.log(perimeter);
console.log(perimeter(10));

// Rest e Spread
function showList(company, ...customers) {
  customers.forEach((customer) => {
    console.log(customer, company);
  });
}

showList("Google", "Eduardo", "André", "Rafael");

const numbers = [10, 5, 20];
const higher = Math.max(...numbers);
console.log(higher);

const numbers2 = [12, ...numbers, 24, 32, 88];
console.log(numbers2);

const car = {
  color: "Blue",
  doors: 4,
};
console.log(car);

const carYear = { ...car, year: 2008 };
console.log(carYear);
// Module (Export/Import)
import square from "./square.js";
console.log(square.squarePerimeter(5));

import randomNumber from "./randomNumber.js";
console.log(randomNumber());

// Fetch
// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// Async/Await
async function fetchProducts(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

// const products = fetchProducts(
//   "https://ranekapi.origamid.dev/wp-json/api/produto"
// );

// console.log(products);

// Arrays (map e filter)
const prices = [
  "Credit",
  "R$ 200",
  "R$ 400",
  "Bills Pay",
  "R$ 300",
  "R$ 400",
  "My data",
];

const filteredPrices = prices.filter((price) => price.includes("R$"));
const numberPrices = filteredPrices.map((price) =>
  Number(price.replace("R$ ", ""))
);
console.log(filteredPrices);
console.log(numberPrices);

// Expressões
const groupA = 120;
const groupB = 200;

// Operador ternário
if (groupA > groupB) {
  console.log("Group A won!");
} else {
  console.log("Group B won!");
}

// Expressão
const winner = groupA > groupB ? "Group A won!" : "Group B won!";
