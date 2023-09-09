const inputs = document.querySelectorAll(".input")

function addFocus() {
    this.parentNode.parentNode.classList.add("focus") // input-box
}

function removeFocus() {
    if (this.value == "") {
        this.parentNode.parentNode.classList.remove("focus")
    }
}

inputs.forEach(i => {
    i.addEventListener("focus", addFocus)
    i.addEventListener("blur", removeFocus)
})