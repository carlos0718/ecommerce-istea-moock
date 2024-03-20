import {renderCards} from "./src/cards.js";
import { storageProducts } from "./src/storage.js";

// render cards
renderCards();

storageProducts();

localStorage.key('product') ? console.log('Data is stored') : console.log('Data is not stored');
console.log(typeof (localStorage.getItem('product')));

console.log(JSON.parse(localStorage.getItem('product')));