const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesglobais(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createelement('p')
    paragrafo.classlist.add('graficos-container__texto')

    paragrafo.innerHTML = `voce sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estao conectadas em alguma rede social e passam em media <span>${dados.tempo_medio}</span> horas conectadas.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    
}

visualizarinformacoesglobais()