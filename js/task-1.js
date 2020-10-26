const numberCategoriesEl = document.querySelector('#categories').children.length;
console.log(`В списке ${numberCategoriesEl} категории`);
const findItems = document.querySelectorAll('.item');
findItems.forEach(showItem =>
console.log(`Категория: ${showItem.firstElementChild.textContent} 
Количество элементов: ${showItem.lastElementChild.children.length}`));
