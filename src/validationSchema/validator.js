import * as Yup from 'yup';

export const loginValidator = Yup.object({
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});

export const forgotPasswordValidator = Yup.object({
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
});

export const resetPasswordValidator = Yup.object({
    password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
    confirm_password:Yup.string().required('Passwords must match').oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const registerValidator = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    phone: Yup.string()
    .required("Phonenumber is required").matches(
      /(^[+]?[234]\d{12}$)/,
      "Enter a valid phone number"),
    email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
    confirm_password:Yup.string().required('Passwords must match').oneOf([Yup.ref('password'), null], 'Passwords must match')
});