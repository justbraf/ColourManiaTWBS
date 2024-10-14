let cols = document.querySelectorAll(".myCols")

document.addEventListener("DOMContentLoaded", () => {
    genColours()
    document.querySelector(".js-refresh")
    .addEventListener("click", () => {
        genColours()
    })
})

let genColours = () => {
    cols.forEach(column => {
        let hexCode = "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
        column.style.background=hexCode
        column.textContent = hexCode
        column.insertAdjacentHTML("beforeend", "<i class=\"bi bi-clipboard position-relative end-100 translate-middle\"></i>")
        column.addEventListener("click", () => writeClipboardText(hexCode))
    })
}

let writeClipboardText = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
                alert("copied text")
            })
        .catch((error) => {
            alert("an error occurred")
            console.error(error.message);
        })
}