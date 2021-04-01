const navCategoryItemEl = document.querySelectorAll('ul#categories li.item');

console.log(`В списке ${navCategoryItemEl.length} категории.`)

navCategoryItemEl.forEach(category => {
    const navCategoryTitleEl = category.querySelector('h2').textContent;
    const navCategoryItemEl = category.querySelectorAll('ul li');
    console.log('Категория: ', navCategoryTitleEl);
    console.log('Количество элементов: ', navCategoryItemEl.length);
});

