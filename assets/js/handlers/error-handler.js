const showError = (message) => {
    let error = document.getElementById("error-msg");
    error.innerText = message;
    error.classList.toggle("d-none");

    setTimeout(()=>{
        error.classList.toggle("d-none");
    },1500);
}