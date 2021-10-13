const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
const elements = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  return items;
});

ingredientsEl.append(...elements); 



