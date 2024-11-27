//Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли. 

/** 

let user = {};

user.name = prompt ("Введите ваше имя: ", "Adam");

user.age = Number(prompt("Введите ваш возвраст: ", "18"));

user.gender = confirm("Вы мужчина? ") ? "мужчина" : "женщина";

console.log(user);

*/

//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.
/**
 
let userNumber = Number(prompt("Введите число:", ""));

if (userNumber) {
    alert (`Вы ввели число: ${userNumber}`);
}

else {
    alert("Вы ввели не число");
}

console.log(`user number: ${userNumber}`);

*/

// Перепишите этот блок кода с использованием оператора switch.
/** 
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a)

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

*/

//Работа с циклами(loops).
//Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
/** 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if( i % 2 === 0) {
        sum += i;
    }
}
  
console.log(sum);

*/

//Перепишите цикл for на while.

let i = 0;

while ( i < 3) {
    i++

    alert(`number ${i}!`);
}



