const showDrink = (drink) => {
    let drinkImage = document.getElementById('drink-image');
    let drinkName = document.getElementById('drink-name');
    let drinkInstructions = document.getElementById('drink-instructions');

    drinkImage.src = drink.image;
    drinkName.innerText = drink.name;
    drinkInstructions.innerText = drink.instructions;
    showIngredients(drink.ingredients);
}

const showIngredients = (ingredients) => {
    clearIngredients();
    for(let i of ingredients){
        createIngredient(i);
    }
}

const createIngredient = (ingredient) => {
    let container = document.getElementById("ingredient-container");
    let newIngredientLabel = document.createElement('label');

    newIngredientLabel.className = 'list-group-item';
    newIngredientLabel.innerHTML = `
    <input class="form-check-input me-1" type="checkbox" value="">
    ${ingredient}`;

    container.appendChild(newIngredientLabel);
}

const clearIngredients = () => {
    let container = document.getElementById("ingredient-container");
    while(container.lastElementChild){
        container.lastElementChild.remove();
    }
}