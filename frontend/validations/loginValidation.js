import * as yup from 'yup';


export const loginSchema = yup.object().shape(
    {
        email: yup.string()
        .email()
        .required("This field is required"),
      password: yup.string()
      .required("No password provided.")
      .min(8, "Password is incorrect.")
        
    }
)



export const registerSchema = yup.object().shape(

    {
        name: yup.string().matches(/^[a-zA-Z ]{2,30}$/, "Should not contain any special characters").required("Name is required") ,
        email: yup.string()
        .email()
        .required("This field is required")
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        password1: yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
        password2: yup.string().oneOf([yup.ref('password1'), null], "Passwords must match")

    }
)
// .matches(/(?=.*[0-9])/, "Password must contain a number.") For registeration

// .min(8, "Password is too short - should be 8 chars minimum.")
