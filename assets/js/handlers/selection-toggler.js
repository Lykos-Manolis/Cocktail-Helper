currentActive = null;

const makeActive = (childIndex) => {
    // remove active status from previous active
    if(currentActive){
        currentActive.classList.toggle('active');
    }

    // make this the current active and toggle it
    currentActive = document.getElementById("result-container").children[childIndex];
    currentActive.classList.toggle('active');
}