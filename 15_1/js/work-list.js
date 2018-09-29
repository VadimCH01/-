var age = prompt('Сколько вам лет?');
var name = prompt('Как вас зовут?');
var access = ('name + добро пожаловать!');

function checkAge() {
	age = prompt('Простите,сколько вам лет?', '')
		if (age > 18) {
			alert("Спасибо, добро пожаловать!")
		} else {
			alert('Простите, вам нет 18 лет.Приходите позже!')

		}
	}
	checkAge();