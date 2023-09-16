const button = document.querySelector('.botao')
const input = document.querySelector('.incluir')
const listaCompleta = document.querySelector('.listar')

let minhaLista = []

function adicionaTarefa() {
  minhaLista.push({
    tarefa: input.value,
    concluida: false
  })

  input.value = ''

  mostrarTarefa()
}

function mostrarTarefa() {
  let criaUmaLi = ''

  minhaLista.forEach((item, posicao) => {
    criaUmaLi = criaUmaLi +
      ` 
      <li class="atividades ${item.concluida && "done"}"><img src="img/ticado.png" alt="check-na-tarefa" onclick="concluir(${posicao})">
    <p>${item.tarefa}</p><img src="img/remover.png" alt="tarefa-para-o-lixo" onclick="removeItem(${posicao})">
    </li>
    `
  })

  listaCompleta.innerHTML = criaUmaLi
  localStorage.setItem('listinha', JSON.stringfy(minhaLista))
}

function concluir(posicao) {
  minhaLista[posicao].concluida = !minhaLista[posicao].concluida

  mostrarTarefa()
}
function removeItem(posicao) {
  minhaLista.splice(posicao, 1)

  mostrarTarefa()
}

function recarregar() {
  const tarefasLStorage = localStorage.getItem('listinha')
  if (tarefasLStorage) {
    minhaLista = JSON.parse(tarefasLStorage)

    mostrarTarefa()
  }
}
recarregar()
button.addEventListener('click', adicionaTarefa)

