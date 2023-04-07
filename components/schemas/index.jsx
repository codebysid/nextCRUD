import * as yup from "yup"

export const validateSchema=yup.object({
    name:yup.string().min(2).max(25).required("Enter Name"),
    contactNumber:yup.number().min(10).required("Invalid"),
    gender:yup.string().required("Dont you have a gender?"),
    country:yup.string().required("Dont you have a country to live?")
})