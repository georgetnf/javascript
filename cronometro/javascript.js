var pausado = false
var cronometro
var unidade

function iniciarCronometro() {
	// body...
	
	unidade = document.getElementById('unidade-tempo').value
	tempo = parseInt(document.getElementById('tempo').value)
	var btnIniciar = document.getElementById('btn-iniciar')


	if (tempo != 0) {

		//Unidade de tempo do input e converter
		if (unidade === 'min') {
			tempo *= 60
		}else if (unidade === 'hr') {
			tempo *= 3600
		}

		cronometro = setInterval(function(){
			//caso esteja pausado
			if (!pausado) {
				tempo -= 1
				//se for menor que 0
				if (tempo <0) {
					//limpa o interval
					clearInterval(cronometro)
					//alert('Acabou o tempo')
				}else{
					document.getElementById('cronometro').innerHTML = formatarTempo(tempo)

				}
			}
		}, 1000)

	}else{
		alert('Digite um tempo válido')
	}

	//tem um bug que mesmo com o contrometro em andamento quando clica no btn iniciar ele aumenta uns segundo a mais '-'
	btnIniciar.disabled = true
}

function pausarCronometro() {
	// body...
	pausado = !pausado

}

function formatarTempo(tempo) {
	// body...
	//3600 segundos...
	var horas = Math.floor(tempo / 3600)
	var minutos = Math.floor((tempo - (horas * 3600)) / 60)
	var segundos = tempo - (horas * 3600) - (minutos * 60)
	
	//add um zero se o valor for menor que 10 (fromato hh:mm:ss)
	horas = (horas < 10) ? '0' + horas : horas
	minutos = (minutos < 10) ? '0' + minutos : minutos
	segundos = (segundos < 10) ? '0' + segundos : segundos

	if (unidade === 'hr') {
		return horas + ':' + minutos + ':' + segundos
	}else if (unidade === 'min') {
		return minutos + ':' + segundos
	}else{
		return segundos + ' segundos'
	}

}