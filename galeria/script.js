const img = document.querySelectorAll('.gallery img')
const gallery = document.querySelector('.gallery')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
let currentImage = 0;
img[currentImage].classList.add('active')
const imgList = document.querySelectorAll('.gallery img')
let currentImageIndex = 0

//////////////////////////
/*Evento dos botões*/
prevButton.addEventListener('click', ()=>{

	// remove a classe 'active' de todas as imagens antes de adicionar apenas à imagem atual
	//isso é pq ele tinha um bug que quando a img maximizada era minimizada e clicava em outra img ficavam 2 img selecionadas
	imgList.forEach(img => img.classList.remove('active'))

	currentImage--;
	if (currentImage < 0) {
		currentImage = img.length -1
	}
	img[currentImage].classList.add('active')
	update();
})

nextButton.addEventListener('click', ()=>{
	
	// remove a classe 'active' de todas as imagens antes de adicionar apenas à imagem atual
	imgList.forEach(img => img.classList.remove('active'))

	img[currentImage].classList.remove('active')
	currentImage++;
	if (currentImage >= img.length) {
		currentImage = 0
	}
	img[currentImage].classList.add('active')
	update()
})

//maximizar imagens
img.forEach(img =>{
	img.addEventListener('click', () =>{

		gallery.classList.add('maximized')

		//elemento modal
		const modal = document.createElement('div')
		modal.classList.add('modal')

		//cria uma imagem dentro do modal
		const imgModal = document.createElement('img')
		imgModal.src = img.src

		// remove a classe 'active' de todas as imagens antes de adicionar apenas à imagem atual
		imgList.forEach(img => img.classList.remove('active'))
		imgModal.classList.add('active')

		modal.appendChild(imgModal)

		//add modal na pag
		document.body.appendChild(modal)

		//fechar o modal quando clickar nele
		modal.addEventListener('click', () =>{
			document.body.removeChild(modal)
		})

	})
})

////////////////////////////////////////////////////////////////

//atualiza a posição da galeria de fotos com base na posição atual da imagem ativa.
function update() {
	// body...
	const activeImg = document.querySelector('.gallery img.active')
	const galleryRect = gallery.getBoundingClientRect()
	const imgRect = gallery.getBoundingClientRect()
	const leftPosition = imgRect.left - galleryRect.left
	gallery.scrollTo(leftPosition,0)
}

//evento de clique p/atualizar a posição das img quando uma nova imagem for selecionada.
img.forEach((img, index) =>{
	img.addEventListener('click', () =>{
		imgList[currentImage].classList.remove('active')
		currentImageIndex = index
		imgList[currentImageIndex].classList.add('active')
		update()
	})
})