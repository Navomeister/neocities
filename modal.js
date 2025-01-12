const botaoT = document.createElement("button")
botaoT.id = "botaoT"
botaoT.setAttribute("popovertarget", "modal")

const modal = document.createElement("img")
modal.id = "modal"
modal.classList.add("img-posts")
modal.setAttribute("popover", "")

document.addEventListener("DOMContentLoaded", () => 
    addModal()
)

function addModal() {
    document.body.appendChild(botaoT);
    document.body.appendChild(modal);
    const imagens = document.getElementsByClassName("expandivel")

    for (let i = 0; i < imagens.length; i++) {
        const imagem = imagens[i];
        imagem.addEventListener("click", () => abreModal(imagem.src))
    }
}



function abreModal(img) {
    modal.src = img
    botaoT.click()
}