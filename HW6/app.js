//### 1. [**Скрыть элемент по нажатию кнопки**]
//Добавьте JavaScript к кнопке `button`, чтобы при нажатии элемент `<div id="text">Remove me</div>` исчезал.

document.querySelector('#button').onclick = () => {
    document.querySelector('#text').hidden = true;
}


//### 2. [**Какой обработчик запустится?**]
//В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
//Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
//button.addEventListener("click", () => alert("1"));
//button.removeEventListener("click", () => alert("1"));
//button.onclick = () => alert(2);
// 1 и 2

//### 3. [**Добавить кнопку закрытия**]
//Есть список сообщений.
//При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.style.display = 'none';
    });
});


//EXTRA
// swiper 
const swiper = new Swiper('.swiper', {
    loop: true, // Бесконечная прокрутка
    slidesPerView: 3, // Показывать по 3 слайда
    spaceBetween: 2, // Отступы между картинками
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        // На мобильных устройствах показываем по 1 слайду
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
    },
});


//accordion
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Скрываем или показываем контент
        content.classList.toggle('active');
    });
});