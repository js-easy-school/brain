// // Находим кнопки в документе
// const plusButton = document.getElementById('plus');
// const minusButton = document.getElementById('minus');
// const submitButton = document.getElementById('submit');

// // Слушаем событие клика на кнопке "+"
// plusButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Складываем значения из полей ввода и выводим результат
//   document.getElementById('result').innerText = input1 + input2;
// });

// // Слушаем событие клика на кнопке "-"
// minusButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Вычитаем значения из полей ввода и выводим результат
//   document.getElementById('result').innerText = input1 - input2;
// });

// // Слушаем событие клика на кнопке "Вычислить"
// submitButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Складываем или вычитаем значения, в зависимости от выбранной операции, и выводим результат
//   if (plusButton.classList.contains('active')) {
//     document.getElementById('result').innerText = input1 + input2;
//   } else if (minusButton.classList.contains('active')) {
//     document.getElementById('result').innerText = input1 - input2;
//   }
// });

// // Находим кнопки в документе
// const plusButton = document.getElementById('plus');
// const minusButton = document.getElementById('minus');
// const submitButton = document.getElementById('submit');

// // Слушаем событие клика на кнопке "+"
// plusButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Складываем значения из полей ввода и выводим результат
//   document.getElementById('result').innerText = input1 + input2;
// });

// // Слушаем событие клика на кнопке "-"
// minusButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Вычитаем значения из полей ввода и выводим результат
//   document.getElementById('result').innerText = input1 - input2;
// });

// // Слушаем событие клика на кнопке "Вычислить"
// submitButton.addEventListener('click', function() {
//   // Получаем значения из полей ввода
//   const input1 = Number(document.getElementById('input1').value);
//   const input2 = Number(document.getElementById('input2').value);

//   // Складываем или вычитаем значения, в зависимости от выбранной операции, и выводим результат
//   if (plusButton.id === 'plus') {
//     document.getElementById('result').innerText = input1 + input2;
//   } else if (minusButton.id === 'minus') {
//     document.getElementById('result').innerText = input1 - input2;
//   }
// });

// Находим кнопки в документе
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const submitButton = document.getElementById('submit')

// Слушаем событие клика на кнопке "+"
plusButton.addEventListener('click', function () {
    plusButton.classList.add('active') // Устанавливаем класс "active"
    minusButton.classList.remove('active') // Удаляем класс "active" с кнопки "-"
})

// Слушаем событие клика на кнопке "-"
minusButton.addEventListener('click', function () {
    minusButton.classList.add('active') // Устанавливаем класс "active";
    plusButton.classList.remove('active') // Удаляем класс "active" с кнопки "+"
})

// Слушаем событие клика на кнопке "Вычислить"
submitButton.addEventListener('click', function () {
    // Получаем значения из полей ввода
    const input1 = Number(document.getElementById('input1').value)
    const input2 = Number(document.getElementById('input2').value)

    // Складываем или вычитаем значения, в зависимости от выбранной операции, и выводим результат
    if (plusButton.classList.contains('active')) {
        console.log('plus:', plusButton.classList.contains('active'))
        document.getElementById('result').innerText = input1 + input2
    } else if (minusButton.classList.contains('active')) {
        console.log('minus', minusButton.classList.contains('active'))
        document.getElementById('result').innerText = input1 - input2
    }

    // Сбрасываем состояние кнопок и поля ввода
    plusButton.classList.remove('active')
    minusButton.classList.remove('active')
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
})

const validatorConfig = {
    email: {
        isRequired: {
            message: 'Электронная почта обязательна для заполнения'
        }
    },
    password: {
        isRequired: {
            message: 'Пароль обязательна для заполнения'
        }
    }
}

console.log(validatorConfig.email.isRequired.message);

