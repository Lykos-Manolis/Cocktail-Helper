const addListeners = () => {
    let search = document.getElementById('searchField');
    search.addEventListener('keydown', (event) => keypressHandler(event.key));
}

const searchDrink = () =>{
    let query = document.getElementById("searchField").value;

    if(query.length === 0){
        return;
    }

    const options = {
        method: 'GET'
    };
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`, options)
        .then(response => response.json())
        .then(response => showOptions(response.drinks))
        .catch(err => console.error(err));
}

const showOptions = (drinks) => {
    emptyResults();
    // No results
    if(!drinks){
        showError("No results for your search..");
        return;
    }

    let elementIndex = 0;
    // Show results
    for(let drink of drinks){
        createItem(drink,elementIndex);
        elementIndex++;
    }
}

const emptyResults = () => {
    let container = document.getElementById('result-container');
    while(container.lastElementChild){
        container.lastElementChild.remove();
    }
}

const createItem = (drink,index) =>{
    let container = document.getElementById("result-container");
    let newItem = document.createElement('a');

    let ingredients = [];

    for(let i=1; i<=15; i++){
        if(!drink['strIngredient'+i]){
            break;
        }
        ingredients.push(drink['strIngredient'+i]);
    }

    newItem.className = "list-group-item list-group-item-action";
    newItem.onclick = ()=>{
        makeActive(index);
        showDrink({
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions,
            ingredients: ingredients
        });
    }
    newItem.innerText = drink.strDrink;

    container.appendChild(newItem);
}

const keypressHandler = (key) => {
    if(key === 'Enter'){
        searchDrink();
    }
}