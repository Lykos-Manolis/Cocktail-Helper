let placeholderIndex = 0;

setInterval(()=>{
    let q = document.getElementById("searchField");
    q.value.length===0 && changePlaceholder(q);
},3000);

const changePlaceholder = (queryField) => {
    placeholderIndex++
    placeholders = ['Tequila','Cosmopolitan','Margarita','Mai Tai'];

    if(placeholderIndex >= placeholders.length){
        placeholderIndex = 0;
    }

    queryField.placeholder = placeholders[placeholderIndex]
}