

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientBox = document.querySelector("#ingredients");

const makeIngridients = options => {
    return options.map(ingredients => {
        const ingridient = document.createElement('li'); 
        ingridient.textContent = ingredients;
        
        return ingridient;
    });
};
const elements = makeIngridients(ingredients);
ingredientBox.append(...elements); 