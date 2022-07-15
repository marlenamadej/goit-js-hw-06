// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
const categoryList = document.querySelectorAll(".item");
const categoryArray = [...categoryList].length;
console.log(`Number of categories: ${categoryArray}`);

// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
const allHeader = document.querySelectorAll("h2");
const allHeaderArray = [...allHeader];

console.log(`Category:${allHeaderArray[0].textContent}`);
const animalsList = allHeaderArray[0].nextElementSibling;
console.log(`Elements:${animalsList.childElementCount}`);


console.log(`Category:${allHeaderArray[1].textContent}`);
const productsList = allHeaderArray[1].nextElementSibling;
console.log(`Elements:${productsList.childElementCount}`);

console.log(`Category:${allHeaderArray[2].textContent}`);
const technologiesList = allHeaderArray[2].nextElementSibling;
console.log(`Elements:${technologiesList.childElementCount}`);

// ZROBIONE




