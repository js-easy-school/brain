let data = {
    age: 15
}

let config = {
    age: {
        minimum: function (value) {
            if (value < 18) {
                return 'Вам должно быть больше 18 лет'
            } else {
                return true
            }
        }
    }
}

let errors = {}
for (const fieldName in data) {
    const fieldConfig = config[fieldName];
    for (const validateMethod in fieldConfig) {
        const fieldValue = data[fieldName];
        const errorConfig = fieldConfig[validateMethod];

        const error = errorConfig(fieldValue);
        if (error) {
            errors[fieldName] = error;
            break;
        }
    }
}

console.log(errors);

const years = 17
const cf = config.age.minimum(years)
cf


