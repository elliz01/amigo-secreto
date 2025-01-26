//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesInseridos = [];

function limparCampo(){
    document.getElementById("amigo").value = '';
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(nome === ""){
        alert('Por favor, insira um nome.');
    }else{
        nomesInseridos.push(nome);
        console.log(nomesInseridos);
        listaAmigos();
    }    

    limparCampo();
}

let lista = document.getElementById("listaAmigos");

function listaAmigos(){
    let lista = document.getElementById("nomesInseridosLista"); 
    lista.innerHTML = '';

    for(let i=0; i < nomesInseridos.length; i++){
        let item = document.createElement('li');
        item.textContent = nomesInseridos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(nomesInseridos.length === 0) {
        alert('Não há amigos para sortear');
    }else if(nomesInseridos.length<2){
        alert('Digite pelo menos dois nomes');
    }else{
        let indiceAleatorio = Math.floor(Math.random()*nomesInseridos.length);
        let amigoSorteado = nomesInseridos[indiceAleatorio];
        document.getElementById('resultadoSorteio').innerHTML = amigoSorteado;
    }
}
