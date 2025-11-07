const botaoT = document.createElement("button")
botaoT.id = "botaoT"
botaoT.setAttribute("popovertarget", "modal")

const modal = document.createElement("div")
modal.id = "modal"
modal.classList.add("img-posts")
modal.setAttribute("popover", "")

const imgModal = document.createElement("img")
imgModal.id = "imgModal"


const altBg = document.createElement("div")
altBg.id = "bgTextoAlt"


const textoAlt = document.createElement("h5")
textoAlt.id = "modalAlt"

altBg.appendChild(textoAlt)
modal.appendChild(imgModal)
modal.appendChild(altBg)

document.addEventListener("DOMContentLoaded", () => 
    addModal()
)

imgModal.addEventListener("mousedown", () => 
    apareceAlt()
)

function apareceAlt() {
    if (altBg.classList.contains("fade-out")) {
        altBg.classList.replace("fade-out", "fade-in")
    }
    else
        altBg.classList.replace("fade-in", "fade-out")
    
}

function addModal() {
    document.body.appendChild(botaoT);
    document.body.appendChild(modal);
    const imagens = document.getElementsByClassName("expandivel")

    for (let i = 0; i < imagens.length; i++) {
        const imagem = imagens[i];
        imagem.addEventListener("click", () => abreModal(imagem.src, imagem.alt))
    }
}

function abreModal(img, alt) {
    imgModal.src = img
    imgModal.alt = alt
    console.log(alt);
    if (alt.length == 0){
        altBg.style.visibility = "hidden"
    }
    else{
        altBg.style.visibility = "visible"
    }
    textoAlt.textContent = alt
    altBg.classList.add("fade-in")
    botaoT.click()
}