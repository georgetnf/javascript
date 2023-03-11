//pegar altura e largura da tela do browser
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criarMosquitoTempo = 1000

//niveis, conforme a dificuldade o tempo muda
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criarMosquitoTempo = 1000
}else if(nivel === 'dificil'){
	criarMosquitoTempo = 800
}else if (nivel === 'pesadelo') {
	criarMosquitoTempo = 500
}

function ajustaTamanhoJogo() {
	// body...

	altura = window.innerHeight
	largura = window.innerWidth

	//coloquei aqui para ser um "tempo real", quando muda o tamanho da tela
	//console.log(altura, largura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function(){
	tempo -=1
	//verificação p/que n tenha números negativos
	if (tempo < 0) {
		//aqui dentro é caso de vitória do jogador
		//limpar o interval
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
} ,1000)

function posicaoRandomica() {
	//a ideia é que com a largura e altura identificados, seja possível adicionar um mosquito na tela de forma aleatória
	//valores máximos de acordo com a altura e largura
	//"-90" é para ser no máximo 90 pixels menor que o limite, isto é para caso de passar o limite...
	var posicaoY = Math.floor(Math.random() * altura) -90
	var posicaoX = Math.floor(Math.random() * largura) -90

	//remover mosquito caso ele exista
	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		//altera a img, "source" da vida
		//se vidas for maior que 3 = game over
		if (vidas > 3) {
			//redireciona para a página de game over
			window.location.href = 'fim_de_jogo.html'
		}
		document.getElementById('v' + vidas).src="img/coracao_vazio.png"
		vidas ++
	}
	

	//corrigindo posições negativas
	//se as posições forem menor que 0, recebem o valor de 0, se não fica igual...
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//mosquito (DOM)
	var mosquito = document.createElement('img')
	//valor source da var, add a imagem
	mosquito.src = 'img/mosquito.png'
	//aplicando classe css
	mosquito.className = tamanhoAleatorio() + '  '+ ladoAleatorio()
	//pixels, a esquerda do browser
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	//id html
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	//add um filho no corpo(a imagem)
	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	// body...
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)

	//classes do mosquito
	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}	
}

//lado do mosquito, esquerda ou direita
function ladoAleatorio() {
	// body...
	var classe = Math.floor(Math.random() * 2)
	console.log(classe)

	//classes do mosquito
	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}