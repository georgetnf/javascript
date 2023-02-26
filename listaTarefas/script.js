//Selecionar o elemento de entrada do texto e do botão add
const inputNovaTarefa = document.querySelector('#nova-tarefa')
const btnAddTarefa = document.querySelector('#adicionar-tarefa')
const tarefas = []

//seleciona lista de tarefas
const listaDeTarefas = document.querySelector('#lista-de-tarefas')

//funções

//botão adicionar
btnAddTarefa.addEventListener('click', function(){

	//verifica se o input esta vazio
	//se estiver vazio e for númerico da um alert
	if(inputNovaTarefa.value === ''){
		alert('Por favor, digite uma tarefa. Valores inválidos!')
		return
	}

	//criar uma nova tarefa
	const novaTarefa = document.createElement('li')
	novaTarefa.innerText = inputNovaTarefa.value

	//add um novo item a lista das tarefas
	//todo item é add como filho
	listaDeTarefas.appendChild(novaTarefa)

	//limpa o texto
	inputNovaTarefa.value = ''

	//adiciona a tarefa na matriz
	tarefas.push(novaTarefa.innerText)
})

//criar a tabela
function criarTabelaDeTarefas(tarefas){

	const tabela = document.createElement('table')

	//cabeçalhos
	const cabecalho = tabela.createTHead()
	const linhaCabecalho = cabecalho.insertRow()
	const colunaTarefaCabecalho = linhaCabecalho.insertCell()
	colunaTarefaCabecalho.innerText = 'Tarefa'
	const colunaIndicieCabecalho = linhaCabecalho.insertCell()
	colunaIndicieCabecalho.innerText ='Índice'
	const colunaRemoverCabecalho = linhaCabecalho.insertCell()
	colunaRemoverCabecalho.innerText = 'Remover'


	//Adiciona as linhas da tabela
	const corpo = tabela.createTBody()
	//Percorremos a matriz de tarefas usando um loop for:
	for (var i = 0; i < tarefas.length; i++) {
		//aqui cria uma nova linha = inserRow
		//e tbm uma coluna = insertCell
		//innerText= adicionamos o texto da tarefa
		const linha = corpo.insertRow()
		const colunaTarefa = linha.insertCell()
		colunaTarefa.innerText = tarefas[i]
		
		//indicie das tarefas
		const colunaIndicie = linha.insertCell()
		colunaIndicie.innerText = i

		//remoção de tarefas
		const colunaRemover = linha.insertCell()
		const btnRemover = document.createElement('button')
		btnRemover.innerText = 'Remover'

		//função remover
		btnRemover.addEventListener('click', RemoverTarefa(i, tarefas, linha))
			colunaRemover.appendChild(btnRemover)		

	}
	return tabela

	function RemoverTarefa(indice, tarefas, linha){
		return function(){
			tarefas.splice(indice,1)
			linha.remove()
			
		}
	}
}

//exibir a tabela
const btnExibirTabela = document.querySelector('#exibir-tabela')
const tabelaDeTarefas = document.querySelector('#tabela-de-tarefas')

btnExibirTabela.addEventListener('click', function(){

	while(tabelaDeTarefas.firstChild){
		tabelaDeTarefas.removeChild(tabelaDeTarefas.firstChild)
	}

	const tabela = criarTabelaDeTarefas(tarefas);

	//adicionar a tabela na pagina
	tabelaDeTarefas.appendChild(tabela)
})

//limpar tabelas da tela
const btnLimparTabela = document.querySelector('#limpar-tabela')

btnLimparTabela.addEventListener('click', function(){
	while(tabelaDeTarefas.firstChild){
		tabelaDeTarefas.removeChild(tabelaDeTarefas.firstChild)
	}
})

//remover as tarefas
const btnRemoverTarefas = document.querySelector('#remover-tarefas')

btnRemoverTarefas.addEventListener('click', function(){
	listaDeTarefas.innerHTML = ''

	tarefas.splice(0,tarefas.length)
})