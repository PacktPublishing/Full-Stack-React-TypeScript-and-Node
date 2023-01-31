const inputEl = document.querySelector("#userName");
console.log("input", inputEl);
const parEl = document.querySelector("#welcomeMsg");

inputEl.addEventListener("change", (e) => {
    parEl.innerHTML = "Welcome " + e.target.value;
});