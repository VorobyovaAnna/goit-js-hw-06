const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};
const listItemsEl = document.querySelector('ul#ingredients');

const items = makeList(ingredients);
listItemsEl.append(...items);
