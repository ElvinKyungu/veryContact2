const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area span");

form.onsubmit = (elvin) => {
    elvin.preventDefault();
    statusTxt.style.display = 'block';
}