const pencil = document.getElementById("pencil")
const userInput = document.getElementById("item-input")
const allItems = document.getElementById("allItems")

pencil.addEventListener("click", () => {
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        additem();
    }
})

function additem() {
    const h2 = document.createElement("h2");
    h2.innerHTML = "-" + userInput.value

    h2.addEventListener("click", () => {
        h2.style.textDecoration = "line-through"
    })

    allItems.insertAdjacentElement("beforeend", h2);
    userInput.value = ""
}