const numberOfCategories = document.querySelectorAll('.item')

console.log(`Number of Categories: ${numberOfCategories.length}`);

const categories = [...numberOfCategories];


categories.forEach( item => {
    console.log(`Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`)
});
