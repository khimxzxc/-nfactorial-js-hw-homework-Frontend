//1. Таблицу с `id="age-table"`.
let table = document.getElementById('age-table');
//2. Все элементы `label` внутри этой таблицы (их три).
table.getElementsByTagName('label');
//3. Первый `td` в этой таблице (со словом «Age»).
table.querySelector('td');
//4. Форму `form` с именем `name="search"`.
document.querySelector('form[name = "search"]');
//5. Первый `input` в этой форме.
let form = document.querySelector('form[name="search"]')
let inputs = form.querySelector('input')
console.log(inputs)
//6. Последний `input` в этой форме.
inputs = form.querySelectorAll('input')
let lastInput = inputs[inputs.length - 1]
console.log(lastInput)


//Что выведет этот код?

 // let body = document.body;

//  body.innerHTML = "<!--" + body.tagName + "-->";

  //alert( body.firstChild.data ); // что выведет?

// Ввывод - BODY на алерте