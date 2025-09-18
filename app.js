//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []; // cria a lista vazia
function adicionarAmigo(){
   let amigo = document.querySelector('input').value;

   if (amigo == '') { // se estiver em branco nao deixa adicionar nada
    alert('Por favor, insira um nome válido');
   } else {
    let repetido = false;
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (listaDeAmigos[i] == amigo) {
            repetido = true;
            break;
        }
    }
    if (repetido) {
        alert('Este nome já foi adicionado.')
    } else {
        listaDeAmigos.push(amigo);
        document.getElementById('amigo').value = '';
        let listaHTML = '';
        for (let i= 0; i < listaDeAmigos.length; i++) {
            listaHTML += '<li>' + listaDeAmigos[i] +"</li>"
        }
        document.getElementById('listaDeAmigos').innerHTML = listaHTML;
        }
    }
}

function embaralhar(lista){
    let listaEmbaralhada = [];

    while (listaEmbaralhada.length < lista.length) {
        let indice = Math.floor(Math.random() * lista.length); // sorteio da posição
        let nome = lista[indice]; // pega o nome sorteado

        // verificação se lista esta embaralhada
        let repetido = false;
        for (let i = 0; i < listaEmbaralhada.length; i++) {
            if (listaEmbaralhada[i] == nome) {
                repetido = true;
                break;
            }
        }
        // se nao for repetido adiciona o nome
        if (!repetido) {
            listaEmbaralhada.push(nome);
        }
    } 
    return listaEmbaralhada;
}
function sortearAmigo() {
  if (listaDeAmigos.length == 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  // pega um número aleatório entre 0 e (tamanho da lista - 1)
  let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

  // pega o nome correspondente
  let amigoSorteado = listaDeAmigos[indiceSorteado];

  // pega o UL do resultado
  let ulResultado = document.getElementById("resultado");

  // limpa o que tinha antes
  ulResultado.innerHTML = "";

  // cria só um <li> com a frase
  let li = document.createElement("li");
  li.textContent = "O amigo sorteado é " + amigoSorteado;
  ulResultado.appendChild(li);
  listaDeAmigos = []

  // limpa a lista que aparece no site
  let ulLista = document.getElementById("listaDeAmigos");
  ulLista.innerHTML = "";
}
