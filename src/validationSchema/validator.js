import * as Yup from "yup";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});

export const forgotPasswordValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const verifyCodeValidator = Yup.object({
  code:  Yup.string()
    .min(6, "Code cannot be less than 6 characters")
    .required("Code is required"),
});

export const resetPasswordValidator = Yup.object({
  password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Passwords must match")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const registerValidator = Yup.object({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  phoneNumber: Yup.string()
    .required("Phonenumber is required")
    .matches(/(^[+]?[234]\d{12}$)/, "Enter a valid phone number"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Passwords must match")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const ProfileAddressValidator = Yup.object({
  store: Yup.string(),
  state: Yup.string()
    .required("State is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phonenumber is required")
    .matches(/(^[+]?[234]\d{12}$)/, "Enter a valid phone number"),
});
