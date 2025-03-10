const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const linguaPag = document.documentElement.lang

const aquario = document.createElement("div")
aquario.id = "aquario"

const cola = document.createElement("div")
cola.id = "colaAquario"
cola.appendChild(aquario)


document.addEventListener("DOMContentLoaded", () => 
    preset(linguaPag)
)

function preset(lingua) {
    footer.innerHTML = 
            `<div id="cards">
                <a href="https://mykocalico.neocities.org/buttons" class="cards"><img src="https://64.media.tumblr.com/0d4db0b90d2cfee79a934ce56163a0b9/298a6b99507e35eb-e4/s100x200/397c38c3259c7bbb0143a3614646f348c9cb3b57.gif"></a>    
                <a href="/images/UI/card.gif" target="_blank" class="cards"><img src="/images/UI/card.gif" alt="a rede de sites"></a>
            </div>
            <div id="seguindo">
                <a href="https://jkap.io"><img src="https://files.crime.team/site/jkap-88x31.gif" alt="jae cohost"></a>
                <a href="https://blog.curiousquail.com" target="new"><img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/curiousquail/quailblog_8831.png" width="88" height="31" alt="small icon that reads QUAILBLOG with an image of a character with a beak"></a>
                <a href="https://blog.radicaldream.land"><img src="https://i.postimg.cc/QxhG798p/dispatchblog-banner.gif" alt="radical dreamland"></a>
                <a href="https://blog.aurahack.jp"><img src="https://aurahack.neocities.org/88x31.gif" alt="aurahack"></a>
                <a href="https://sharkaeopteryx.neocities.org/"><img src="/images/UI/shark-button.png" alt="sharkaeopteryx"></a>
                <a href="https://pedipanol.bearblog.dev"><img src="https://bear-images.sfo2.cdn.digitaloceanspaces.com/pedipanol/sariatrain1x.gif" alt="os trem da saria"></a>
                <a href="https://damien.zone" title="damien dot zone"><img src="https://damien.zone/public/88x31_damien.png" alt="damien dot zone" style="image-rendering:pixelated;" /></a>
                <a href='https://nekoraita.art.br' target='_blank'><img src='https://nekoraita.art.br/static/resources/button.png' alt="nekoraita.art.br"></a>
                <a href="https://anjos.cc" target='_blank'><img src="https://anjos.cc/button/anjosa.png" alt="anjos.cc"></a>
            </div>`
    switch (lingua) {
        case "en":
            header.innerHTML = 
            `<div id="abas">
                <h2 onclick="window.location.href = '/eng.html'">Things</h2>
                <h2 onclick="window.location.href = '/blog/eng.html'">Blog</h2>
                <h2 onclick="window.location.href = '/sobre/eng.html'">About</h2>
            </div>
            <div id="icones-header">
                <div id="rss">
                    <a href="/feed-en.xml" target="_blank">
                        <img id="img-rss" src="/images/UI/rss.png" alt="ícone rss">
                    </a>
                </div>
                <div id="linguas">
                    <a id="eng" class="lingua lingua-atual"><h1>&#x1f1ec;&#x1f1e7;</h1></a>
                    <div id="outras-linguas">
                        <a id="pt-br" class="lingua"><h1>&#x1f1e7;&#x1f1f7;</h1></a>
                        <a id="esp" class="lingua"><h1>&#x1f1ea;&#x1f1f8;</h1></a>
                        <a id="jap" class="lingua"><h1>&#x1f1ef;&#x1f1f5;</h1></a>
                    </div>
                </div>
            </div>`
            break;
    
        case "es":
            header.innerHTML = 
            `<div id="abas">
                <h2 onclick="window.location.href = '/esp.html'">Producciones</h2>
                <h2 onclick="window.location.href = '/blog/esp.html'">Blog</h2>
                <h2 onclick="window.location.href = '/sobre/esp.html'">Sobre</h2>
            </div>
            <div id="icones-header">
                <div id="rss">
                    <a href="/feed-es.xml" target="_blank">
                        <img id="img-rss" src="/images/UI/rss.png" alt="ícone rss">
                    </a>
                </div>
                <div id="linguas">
                    <a id="esp" class="lingua lingua-atual"><h1>&#x1f1ea;&#x1f1f8;</h1></a>
                    <div id="outras-linguas">
                        <a id="pt-br" class="lingua"><h1>&#x1f1e7;&#x1f1f7;</h1></a>
                        <a id="eng" class="lingua"><h1>&#x1f1ec;&#x1f1e7;</h1></a>
                        <a id="jap" class="lingua"><h1>&#x1f1ef;&#x1f1f5;</h1></a>
                    </div>
                </div>
            </div>`
            break;
    
        case "ja":
            header.innerHTML = 
            `<div id="abas">
                <h2 onclick="window.location.href = '/jap.html'">作品</h2>
                <h2 onclick="window.location.href = '/blog/jap.html'">ブログ</h2>
                <h2 onclick="window.location.href = '/sobre/jap.html'">ついて</h2>
            </div>
            <div id="icones-header">
                <div id="rss">
                    <a href="/feed-ja.xml" target="_blank">
                        <img id="img-rss" src="/images/UI/rss.png" alt="ícone rss">
                    </a>
                </div>
                <div id="linguas">
                    <a id="jap" class="lingua lingua-atual"><h1>&#x1f1ef;&#x1f1f5;</h1></a>
                    <div id="outras-linguas">
                        <a id="pt-br" class="lingua"><h1>&#x1f1e7;&#x1f1f7;</h1></a>
                        <a id="esp" class="lingua"><h1>&#x1f1ea;&#x1f1f8;</h1></a>
                        <a id="eng" class="lingua"><h1>&#x1f1ec;&#x1f1e7;</h1></a>
                    </div>
                </div>
            </div>`
            break;
    
        default:
            header.innerHTML = 
            `<div id="abas">
                <h2 onclick="window.location.href = '/index.html'">Produções</h2>
                <h2 onclick="window.location.href = '/blog/index.html'">Blog</h2>
                <h2 onclick="window.location.href = '/sobre/index.html'">Sobre</h2>
            </div>
            <div id="icones-header">
                <div id="rss">
                    <a href="/feed.xml" target="_blank">
                        <img id="img-rss" src="/images/UI/rss.png" alt="ícone rss">
                    </a>
                </div>
                <div id="linguas">
                    <a id="pt-br" class="lingua lingua-atual"><h1>&#x1f1e7;&#x1f1f7;</h1></a>
                    <div id="outras-linguas">
                        <a id="esp" class="lingua"><h1>&#x1f1ea;&#x1f1f8;</h1></a>
                        <a id="eng" class="lingua"><h1>&#x1f1ec;&#x1f1e7;</h1></a>
                        <a id="jap" class="lingua"><h1>&#x1f1ef;&#x1f1f5;</h1></a>
                    </div>
                </div>
            </div>`
            break;
    }

    document.body.prepend(cola)
    peixadas()
}

function peixadas(){
    const urls = ["/images/UI/anaoNadando.gif", "/images/UI/cobraNadando.gif", "/images/UI/fatasmaNadando.gif", "/images/UI/goblinNadando.gif"]
    var populacao = 5
    
    for (let index = 0; index < populacao; index++) {
        const aquario = document.querySelector("#aquario")
        urls.forEach(url => {
            // cria a div que vai ter a animação
            const tubarao = document.createElement("div")
            tubarao.classList = "tubaroes"
    
            // randomiza o tempo de nado e local do tubarão (se conseguir fazer o tempo randomizar na função, trocar pela função)
            const tempoNadando = 15 + (20 * Math.random())
            const tempoDelay = 10 * Math.random()
            tubarao.style.animation = "nadando "+ tempoNadando +"s linear "+ tempoDelay +"s infinite alternate"
            
            // eventListener pra randomizar toda vez que terminar uma iteração
            tubarao.addEventListener("animationiteration", () => randomiza(tubarao))
            
            const imgTubaro = document.createElement("img")
            imgTubaro.src = url
            imgTubaro.classList = "tubarao flip"
            if (url.includes("anao")) {
                imgTubaro.classList.add("pequeno")
                
            }
            
            tubarao.appendChild(imgTubaro)
            aquario.appendChild(tubarao)
            randomiza(tubarao)
        });
    }
    function randomiza(tubarao) {
        const altura = (110 * Math.random()) - 10
        var profundidade = 150 - (Math.random() * 100)
        const img = tubarao.querySelector(".tubarao")

        if (img.classList.contains("pequeno")) {
            img.style.scale = (profundidade - 25) + "%"
        } else {
            img.style.scale = profundidade + "%"
        }
        img.style.opacity = profundidade + "%"
        
        tubarao.style.top = altura + "%"
    
        if (img.classList.contains("flip")) {
            img.classList.remove("flip")
        } else {
            img.classList.add("flip")
        }
    }
}