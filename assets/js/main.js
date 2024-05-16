let container = document.querySelector('.listaTarefas');
let inputTarefas = document.getElementById('idLista');

function addTarefa(tarefa) {
    let tagCriada = document.createElement('li');
    let inputCriado = document.createElement('input');
    inputCriado.setAttribute('type', 'submit');
    inputCriado.setAttribute('value', 'apagar');
    inputCriado.setAttribute('onclick', 'apagar()');
    inputCriado.setAttribute('class', 'apagar')
    tagCriada.setAttribute('class', 'paragrafo')

    if (!tarefa) return;

    tagCriada.innerText = `${tarefa}   `;

    container.appendChild(tagCriada);
    tagCriada.appendChild(inputCriado);
    inputTarefas.value = ''

}

function apagar() {
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvaValor();
        }
    })
}


//A função se tornou funcional, pois conectou os elementos da lista da página, com os elementos adicionados
//através do querySelectorAll, selecionando as "li", as quais se ligam com os elementos do array
function salvaValor() {
    const liTarefas = container.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    //Utilizando a biblioteca JSON para converter os dados do array em String.
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //Utilizando o localStorage do navegador para armazenar os dados postos na variável do array transformado em string
    localStorage.setItem('tarefas', tarefasJSON)
    //Chamando a função de recuperar os dados salvos
}

function adicionaTarefasSalvas(){
    //Recuperando os dados salvos através de getItem
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefas of listaDeTarefas){
        addTarefa(tarefas);
    }
}
adicionaTarefasSalvas();
//Função não utilizada por causar conflito no momento de apertar o botão para apagar os elementos do array
//juntamente com os elementos da página

/* 
let salvador = [];
let salvadorJSON;
function salvaValor(){
let tarefas = inputTarefas.value;
    salvador.push(tarefas)
    salvadorJSON = JSON.stringify(salvador);
    localStorage.setItem('tarefas', salvadorJSON);
    console.log(salvadorJSON)
}*/
