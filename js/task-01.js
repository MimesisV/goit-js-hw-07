const list = document.querySelector("categories");
const items = document.querySelectorAll(".item");

console.log("Number of categories: ", items.length);

items.forEach(item => {
    console.log(`Categories:  ${item.firstElementChild.textContent}`);
    console.log(`Elements:  ${item.querySelectorAll('ul li').length}`);
})






















































// const categoriesList = document.querySelector('categories');
// const categoryItems = document.querySelectorAll('.item');

// console.log('Number of categories: ', categoryItems.length);

// categoryItems.forEach((item) => {
//     console.log(`Categories: ${item.querySelector('h2').textContent}`);
//     console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
//   });