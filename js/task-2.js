const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemIngredients = ingredients.map((ingredient) => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    
    return liEl;
});
console.log(itemIngredients);

const listEl = document.querySelector('#ingredients');
listEl.append(...itemIngredients);
console.log(listEl);