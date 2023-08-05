// Функция для валидации данных
// Принимает два аргумента: данные, которые нужно валидировать, и конфигурацию валидации
export function validator(data, config) {
    const errors = {}
    // Функция для валидации поля
    function validateField(_fieldName, fieldValue, fieldValidations) {
        // Перебираем все методы валидации, определенные для данного поля
        for (const validationMethod in fieldValidations) {
            const validationValue = fieldValidations[validationMethod]
            let statusValidate
            switch (validationMethod) {
                // Метод "isRequired" проверяет, что поле не пустое
                case "isRequired":
                    // Если поле пустое, возвращаем сообщение об ошибке
                    statusValidate = fieldValue.trim() === ""
                    break
                case "isEmail": {
                    const emailRegExp = /^\S+@\S+\.\S+$/g
                    statusValidate = !emailRegExp.test(fieldValue)
                    break
                }
                case "isCapitalSymbol": {
                    const capitalRegExp = /[A-Z]+/g
                    statusValidate = !capitalRegExp.test(fieldValue)
                    break
                }
                case "isContainDigit": {
                    const digitRegExp = /\d+/g
                    statusValidate = !digitRegExp.test(fieldValue)
                    break
                }
                case "min": {
                    statusValidate = fieldValue.length < validationValue.value
                    break
                }
                // Добавьте другие методы валидации, если необходимо
                default:
                    break
            }
            if (statusValidate) return validationValue.message
        }
        // Если ошибок нет, возвращаем undefined
        return undefined
    }

    // Перебираем все поля данных и проверяем их на соответствие валидации
    for (const fieldName in data) {
        const error = validateField(
            fieldName, // Название поля
            data[fieldName], // Значение поля
            config[fieldName] // Методы валидации для данного поля
        )
        if (error) {
            // Если поле не прошло валидацию, добавляем его и сообщение об ошибке в объект ошибок
            errors[fieldName] = error
        }
    }

    // Возвращаем объект с ошибками (если они есть)
    return errors
}

// export function validator(data, config) {
//     const errors = {}

//     // Функции валидации
//     const validationMethods = {
//         isRequired: (fieldValue, validationValue) =>
//             fieldValue.trim() === "" ? validationValue.message : undefined,
//         isEmail: (fieldValue, validationValue) => {
//             const emailRegExp = /^\S+@\S+\.\S+$/g
//             return !emailRegExp.test(fieldValue)
//                 ? validationValue.message
//                 : undefined
//         },
//         isCapitalSymbol: (fieldValue, validationValue) => {
//             const capitalRegExp = /[A-Z]+/g
//             return !capitalRegExp.test(fieldValue)
//                 ? validationValue.message
//                 : undefined
//         },
//         // Добавьте другие методы валидации, если необходимо
//     }

//     for (const fieldName in data) {
//         const fieldValidations = config[fieldName]
//         // Перебираем все методы валидации, определенные для данного поля
//         for (const validationMethod in fieldValidations) {
//             if (
//                 Object.prototype.hasOwnProperty.call(
//                     validationMethods,
//                     validationMethod
//                 )
//             ) {
//                 const error = validationMethods[validationMethod](
//                     data[fieldName],
//                     fieldValidations[validationMethod]
//                 )
//                 if (error) {
//                     // Если поле не прошло валидацию, добавляем его и сообщение об ошибке в объект ошибок
//                     errors[fieldName] = error
//                     // Прекращаем валидацию текущего поля, если ошибка была найдена
//                     break
//                 }
//             }
//         }
//     }

//     // Возвращаем объект с ошибками (если они есть)
//     return errors
// }
