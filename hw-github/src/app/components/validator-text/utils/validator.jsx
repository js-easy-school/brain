import { isRequired } from "./validateRules";

export const validate = (values, config) => {
    // создаём объект с ошибками
    const errors = {};

    // проходим циклом по ключам объекта с данными формы
    for (const name in values) {
        /**
         * Получаем объект с описанием правил валидации
         * для конкретного поля
         * Например для email мы получим validationSchema.email
         * или если наглядно:
         * {isRequired: { message: "Электронная ..."}}
         */
        const validationRules = config[name];

        // Проходимся по всем ключам объекта c правилами
        for (const rule in validationRules) {
            /**
             * Получаем объект конкретного правила валидации
             * Например для email получим validationSchema.email.isRequired
             * или если наглядно:
             * { message: "Электронная ..."}
             */
            const { message } = validationRules[rule];

            // Проверяем есть ли ошибка
            const hasError = true; // напишем позже

            if (hasError) {
                errors[name] = message;

                /**
                 * останавливаем внутренний цикл прохода по
                 * правилам валидации, если уже нашли ошибку
                 */
                break;
            }
        }
    }

    // Возвращаем объект
    return errors;
};

const validator = (ruleName, value) => {
    switch (ruleName) {
        case "isRequired":
            return isRequired(value);
        default:
            // если передан не существующий валидатор
            return true; 
    }
};