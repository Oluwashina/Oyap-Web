import * as Yup from "yup";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
});

export const forgotPasswordValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const cancelOrderValidator = Yup.object({
  reason: Yup.string()
    .required("Reason is required"),
});

export const reviewValidator = Yup.object({
  feedback: Yup.string()
    .required("Review is required"),
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
  .min(11, 'Phone number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for phone number')
    .required("Phonenumber is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid phone number"),
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


export const registerAdminValidator = Yup.object({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  phoneNumber: Yup.string()
  .min(11, 'Phone number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for phone number')
    .required("Phonenumber is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid phone number"),
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
  phone:  Yup.string()
  .min(11, 'Phone number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for phone number')
    .required("Phonenumber is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid phone number"),
});

export const withdrawValidator = Yup.object({
  amount: Yup.string()
  .required("Amount is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount"),
  accountNumber: Yup.string()
  .required("Account number is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid account number")
  .max(10, 'Account number cannot be more than 10 digits'),
  bank: Yup.string()
    .required("Bank is required"),
  accountName: Yup.string()
    .required("Account name is required"),
  narration: Yup.string()
    .required("Narration is required"),
});


export const addProductValidator = Yup.object({
  type: Yup.string()
    .required("Product type is required"),
  category: Yup.string()
    .required("Category is required"),
  name: Yup.string()
    .required("Product name is required"),
  price: Yup.string()
  .required("Price is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount"),
  quantity: Yup.string()
  .required("Quantity is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid quantity"),
  weight: Yup.string()
  .required("Weight is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid weight"),
  isLogistics: Yup.string().required("An option is required"),
  description: Yup.string()
    .required("Description is required"),
});

export const ChangePasswordValidator = Yup.object({
  password:  Yup.string()
  .required('Password is required'),
  newpassword:  Yup.string()
  .required('Enter a new password'),
   confirm_password:Yup.string()
   .required("Passwords must match")
   .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
});