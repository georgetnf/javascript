const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

//para cada botão
buttons.forEach((btn) => {
	//evento de clique
	btn.addEventListener('click', () => {
		//igual
		if (btn.id === "=") {
			display.value = eval(display.value)
		//limpar
		}else if(btn.id === "ac"){
			display.value = ""
		//delete
		}else if(btn.id == "de"){
			display.value = display.value.slice(0, -1)
		}else{
			//add o valor do button id ao display
			display.value += btn.id
		}
	})
})