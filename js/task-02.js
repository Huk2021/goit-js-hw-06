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
[...ingredients].forEach((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  ingredientsEl.appendChild(items);
});