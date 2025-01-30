const linguas = document.getElementsByClassName("lingua");

document.addEventListener("DOMContentLoaded", () => 
    presetLinguas()
)

function presetLinguas() {
    document.getElementById("linguas").addEventListener("click", () => expandeLinguas())
    for (let i = 0; i < linguas.length; i++) {
        const lingua = linguas[i];
        if (!lingua.classList.contains("lingua-inativa") && !lingua.classList.contains("lingua-atual")) {
            lingua.addEventListener("click", () => mudaLingua(lingua.id))
        }
    }
}

function mudaLingua(lingua) {
    switch (lingua) {
        case "pt-br":
            window.location.href = "index.html";
            break;
    
        default:
            window.location.href = lingua + ".html";
            break;
    } 
}

function expandeLinguas() {
    
    const linguas = document.getElementById("outras-linguas")    

    switch (linguas.style.display) {
        case "flex":
            linguas.style.display = "none"
            break;
    
        default:
            linguas.style.display = "flex"
            break;
    }
}