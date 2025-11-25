// Day 16

// 1. Frequency counter — words array → {word: count} (reduce).

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const freq = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(freq); // { apple: 3, banana: 2, orange: 1 }


// 2. Top N items — products with price -> top 3 expensive (sort + slice or reduce building top N). Use reduce approach.
const products = [
  { name: "A", price: 200 },
  { name: "B", price: 500 },
  { name: "C", price: 150 },
  { name: "D", price: 700 },
  { name: "E", price: 300 }
];

const N = 3;

const topN = products.reduce((top, item) => {
  top.push(item);
  top.sort((a, b) => b.price - a.price);
  if (top.length > N) top.pop();
  return top;
}, []);

console.log(topN);


// 3. Transform array of objects into object keyed by id — [{id:1,..}] -> {1:obj} (reduce).
const arr = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Tablet" }
];

const result = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

console.log(result); // {1: {...}, 2: {...}, 3: {...}}


// 4. Compose map+filter+reduce — find total price of items in cart where inStock===true and category==='food'.
const cart = [
  { name: "Rice", price: 50, inStock: true, category: "food" },
  { name: "Soap", price: 30, inStock: true, category: "non-food" },
  { name: "Milk", price: 40, inStock: false, category: "food" }
];

const total = cart
  .filter(item => item.inStock && item.category === "food")
  .map(item => item.price)
  .reduce((a, b) => a + b, 0);

console.log(total); // 50


// 5. Group and aggregate — array of sales {product, amount} -> {product: totalAmount} (reduce).
const sales = [
  { product: "A", amount: 100 },
  { product: "B", amount: 50 },
  { product: "A", amount: 200 },
  { product: "B", amount: 150 }
];

const totals = sales.reduce((acc, sale) => {
  acc[sale.product] = (acc[sale.product] || 0) + sale.amount;
  return acc;
}, {});

console.log(totals); // { A: 300, B: 200 }


// 6. Compute running totals — from [1,2,3] -> [1,3,6] (map with accumulator or reduce building array)
let sum = 0;
const nums = [1, 2, 3];

const runningTotals = nums.map(n => sum += n);

console.log(runningTotals); // [1, 3, 6]

