export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        }
    },
    link: {
        isRequired: {
            message: "Ссылка обязательна для заполнения"
        }
    },
    description: {
        isRequired: {
            message: "Описание обязательно для заполнения"
        }
    }
};


