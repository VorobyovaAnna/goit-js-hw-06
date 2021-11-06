const findLiItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${findLiItems.length}`);

findLiItems.forEach(findLiItem => {
    const textOfH2 = findLiItem.querySelector('h2').textContent;
    console.log(`Category: ${textOfH2}`);

    const elements = findLiItem.querySelectorAll('li');
    console.log(`Elements: ${elements.length}`);
})
