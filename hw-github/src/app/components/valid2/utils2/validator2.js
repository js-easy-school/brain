function validateField(validateMethod, fieldValue, errorConfig) {
    switch (validateMethod) {
        case "isRequired":
            if (typeof fieldValue === "string" && fieldValue.trim() === "")
                return errorConfig.message
            else if (!fieldValue)
                // Дополнительная проверка для нестроковых значений
                return errorConfig.message
            break
        default:
            break
    }
}

export function validator(data, config) {
    const errors = {}
    for (const fieldName in data) {
        const fieldConfig = config[fieldName]

        // fieldConfig - это строка была не нужна, поэтому ее следует удалить

        for (const validateMethod in fieldConfig) {
            const fieldValue = data[fieldName]

            const errorConfig = fieldConfig[validateMethod]

            const error = validateField(validateMethod, fieldValue, errorConfig)
            if (error) {
                errors[fieldName] = error
                break // Добавлено прерывание цикла после обнаружения ошибки
            }
        }
    }

    return errors
}

// // Создание объекта данный для валидации
// const data = {
//     name: "Имя", // Изменено значение полей "name" и "email" на пустые строки для тестирования валидации
//     email: "Эмэйл", // Значение поля "email"
// };

// // Создание объекта с правилами валидации
// const config = {
//     name: {
//         // Правила валидации для поля "name"
//         isRequired: {
//             // Правило "isRequired"
//             message: "Имя не должно быть пустым", // Сообщение об ошибке
//         },
//     },
//     email: {
//         // Правила валидации для поля "email"
//         isRequired: {
//             // Правило "isRequired"
//             message: "Email не должно быть пустым", // Сообщение об ошибке
//         },
//     },
// };

// // Применение функции validator к данным и конфигурации для получения объекта ошибок
// const errors = validateData(data, config);

// // Вывод объекта "errors" в консоль
// console.log(errors); // { name: 'Имя не должно быть пустым', email: 'Email не должно быть пустым' }
