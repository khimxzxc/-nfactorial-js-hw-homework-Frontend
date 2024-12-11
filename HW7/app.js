//1. Функция `delay(ms)` должна возвращать промис, который перейдёт в состояние «выполнен» через `ms` миллисекунд, так чтобы мы могли добавить к нему `.then`:
    //function delay(ms) {
    //    return new Promise(resolve => setTimeout(resolve, ms));
   // }
  
   // delay(3000).then(() => alert('выполнилось через 3 секунды'));

//2. Можно ли перевыполнить промикс

 // let promise = new Promise(function(resolve, reject) {
 //   resolve(1);
  
 //   setTimeout(() => resolve(2), 1000);
//  });
  
 // promise.then(alert);

// only resolve(1);

//3. Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2);
// promise.then(f1, f2);

// не является