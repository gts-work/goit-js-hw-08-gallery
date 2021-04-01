const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
  ingredients: document.querySelector('#ingredients'),
}

refs.ingredients.classList.add('ingredients');

const element = ingredients.map(item => {
    const navEl = document.createElement('li');
    navEl.innerText = item;

    return navEl;
});

refs.ingredients.append(...element);

console.log(refs.ingredients);



