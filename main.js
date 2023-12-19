document
	.getElementById('reloadLink')
	.addEventListener('click', function (event) {
		event.preventDefault()
		location.reload()
	})
document
	.getElementById('scrollToMenu')
	.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем стандартное поведение ссылки

		// Получаем высоту позиции, до которой нужно прокрутить страницу
		var targetPosition = 2132.800048828125

		// Прокручиваем страницу до указанной позиции
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth', // Добавляем плавную анимацию прокрутки
		})
	})
document
	.getElementById('scrollToAboutUs')
	.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем стандартное поведение ссылки

		// Получаем высоту позиции, до которой нужно прокрутить страницу
		var targetPosition = 1023.2000122070312

		// Прокручиваем страницу до указанной позиции
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth', // Добавляем плавную анимацию прокрутки
		})
	})
document
	.getElementById('copyPhoneNumber')
	.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем стандартное поведение ссылки

		// Создаем временный элемент для копирования текста
		var tempInput = document.createElement('input')
		tempInput.value = event.target.textContent // Задаем значение номера телефона
		document.body.appendChild(tempInput)

		// Выделяем текст внутри элемента
		tempInput.select()
		document.execCommand('copy') // Копируем выделенный текст в буфер обмена

		// Удаляем временный элемент
		document.body.removeChild(tempInput)
	})
document
	.getElementById('scrollToMenuButton')
	.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем стандартное поведение ссылки

		// Получаем высоту позиции, до которой нужно прокрутить страницу
		var targetPosition = 2132.800048828125

		// Прокручиваем страницу до указанной позиции
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth', // Добавляем плавную анимацию прокрутки
		})
	})
document.getElementById('openPopup').addEventListener('click', function () {
	document.getElementById('popup').style.display = 'block'
})

document.getElementById('closePopup').addEventListener('click', function () {
	document.getElementById('popup').style.display = 'none'
})

document
	.getElementById('submitPhoneNumber')
	.addEventListener('click', function () {
		var phoneNumber = document.getElementById('phoneNumber').value
		alert(
			'Спасибо! В ближайшее время оператор перезвонит для бронирования столика.'
		)
		document.getElementById('popup').style.display = 'none'
	})


