"use strict"

const page = document.querySelector(".wrapper");   // * Переменная оболочки страницы
const btn = document.querySelector(".button");   // * Переменная кнопки
const nameColor = document.querySelector(".info");   // * Переменная с информацией о цвете

function changeText() {   // * Функция изменения текста кнопки
	const text = {   // * Возможные диалоги
		0: "Круто!",
		1: "Магия JS",
		2: "Ещё разок",
		3: "Красиво",
		4: "Великолепно",
		5: "Ура!",
		6: "Красиво",
		7: "Нажми на меня",
	};

	let randomText = Math.floor(Math.random() * 8);   // * Формирование случайного индекса

	btn.innerHTML = text[randomText];   // * Изменение текста кнопки на случайный
}

function Start() {   // * Начало цикла
	const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];   // * Массив возможных значений hex

	let hexColor = "";   // * Переменная для хранения цвета

	for (let i = 0; i < 6; i++) {   // * Цикл для формирования случайного цвета
		let randomIndex = Math.floor(Math.random() * hex.length);   // * Случайный индекс

		hexColor += hex[randomIndex];   // * Заполнение пременной символами
	}

	nameColor.innerHTML = `Color: ${hexColor}`;   // * Вывод цвета
	page.style.background = `#${hexColor}`;   // * Изменение цвета фона

	changeText();   // * Запуск функции изменения текста кнопки
}


