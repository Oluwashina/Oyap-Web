import * as Yup from 'yup';

export const loginValidator = Yup.object({
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});

export const registerValidator = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
    confirm_password:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});