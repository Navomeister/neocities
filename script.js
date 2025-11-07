const categorias = document.getElementsByClassName("categoria");

for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];
    categoria.addEventListener("click", () => mudaCategoria(categoria))
}

function mudaCategoria(botao) {
    if (!botao.className.includes("cate-selecionada")){
        for (let i = 0; i < categorias.length; i++) {
            const categoria = categorias[i];
            categoria.classList.remove("cate-selecionada");
        }
        botao.classList.add("cate-selecionada");

        mudaPosts(botao.id);
    }
}

function mudaPosts(categoria){   
    const posts = document.getElementsByClassName("post");
    if (categoria != "tudo") {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            post.classList.add("invisivel");
        }
        const postsVis = document.getElementsByClassName(categoria)
        for (let i = 0; i < postsVis.length; i++) {
            const post = postsVis[i];
            post.classList.remove("invisivel");            
        }
    }
    else{
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            post.classList.remove("invisivel");
        }
    }
}
