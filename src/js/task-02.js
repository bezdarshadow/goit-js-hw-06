const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newItemList = document.querySelector('ul#ingredients');

const ingredient = ingredients.map(el => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = el;
  

  return newItem;
});

newItemList.append(...ingredient);



