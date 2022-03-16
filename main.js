'use strict'

const pesquisarRacas = async () => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response .json()
    return Object.keys(data.message)
}


const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)

    const data = await response.json()

    return data


}

const criarImg = (imagem) =>{
    const img = document.createElement('img')
    img.src = imagem
    return img


}
    const carregarImagens = async () =>{

        const container = document.getElementById('imagem-container')
        const raca = document.getElementById('raca').value
        const imagens = await pesquisarCachorro(raca)
    
        const tagImagens = imagens.message.map(criarImg)

        container.replaceChildren(...tagImagens)
    }

const carregarRacas = async () => {
    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML = `
    <option>
        ${racas.join("</option><option>")}
    </otion>
    `
    console.log(racas.join("<option></option>"))
    
}

document.getElementById('pesquisar').addEventListener('click', carregarImagens)

carregarRacas()

const abrirModal = () => document.getElementById('modal').classList.add('active')
document.getElementById('abrirModal').addEventListener('click', abrirModal)


const fecharModal = () => document.getElementById('modal').classList.remove('active')
document.getElementById('fechar').addEventListener('click', fecharModal)


document.getElementById('modal').addEventListener('click', fecharModal)
                                                          