const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
const category = document.querySelectorAll('.item');
category.forEach((number) => {
    console.log(`Category: ${number.firstElementChild.textContent}`);
 console.log(`Elements: ${number.lastElementChild.childElementCount}`);
});