import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validate } from "../utils/validator";
import { validationSchema } from "./validationSchema";

const MyForm = () => {
    // ...

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    return (
        // ...
    );
};
export default MyForm;