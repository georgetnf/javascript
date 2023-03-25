function gerarSenha(tamanho) {
	// body...
	//caracteres possívies
	var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
	var senha = ""

	//enquanto a variavel i for menor que o tamanho ele vai percorrer a variavel 
	for (var i = 0; i < tamanho; i++) {
		//gera um número aleatório, arredondando ele 
		var indiceAleatorio = Math.floor(Math.random() * caracteres.length)
		//gera a senha
		senha += caracteres.charAt(indiceAleatorio)
	}
	return senha

	document.getElementById('senha').textContent = senha
	document.getElementById("output[for='tamanho']").textContent = senha

}

function gerar(){
	
	//Gera a senha
	var tamanho = document.getElementById('tamanho').value
	//procura o tamannho da função anerior
	var senhaGerada = gerarSenha(tamanho)
	//passa o valor localizando o id
	document.getElementById('senha').innerHTML = senhaGerada

	//atualiza output da senha(range)
	UpdateOutput()
	
}

function UpdateOutput(){
//isso aqui muda o valor do output
	tamanho = document.getElementById('tamanho')
	var output = document.querySelector("output[for='tamanho']")
	output.value = tamanho.value
	tamanho.addEventListener('input', function(){
		output.value = tamanho.value
	})
}