// função que tem um parametro para selecionar o audio 
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento.localName === 'audio' && elemento != null) {
            elemento.play();
        } else {
            alert('Elemento não encontrado!');
        }

};

// o metodo querySelectorAll transforma todos os elementos da classe em uma lista, por isso o nome listOfTeclas
const listOfTeclas = document.querySelectorAll('.tecla')

// Com o loop while, ele faz seguir (identar) a lista  'listOfTeclas' 

for (let i = 0; i < listOfTeclas.length; i++) {
    // variavel tecla recebe a listaOfTecla com o identador 'i' recebendo sempre +1 e identando pelo code
    
    const tecla = listOfTeclas[i] // salvando 'listOfTecla' em uma variavel para o code ficar limpo
    const listaComContador = tecla.classList[1];// a função classList me mostrará uma lista de classe que está dentro de "listOfTeclas", nela, queremos pegar a classe que mostra o nome do botão, que fica na segunda posição, por isso indice[1]
    const idAudio = `#som_${listaComContador}` // criamos uma constante que irá armazenar o id do botão, onde usaremos de parâmetro para a função tocaSom

    tecla.onclick = function () {
        tocaSom(idAudio)    
    }
    
    tecla.onkeydown = function (evento) {

        

        if (evento.code === 'Enter' || evento.code === '') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}



