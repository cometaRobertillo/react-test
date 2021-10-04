import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "../models/user";

const baseUrl : string = 'https://reportingapp2.herokuapp.com/api'; 

export const loginRequest = (formValues : User) => {
    const url = baseUrl+'/login'
    axios.post(url, formValues)
    .then((response : AxiosResponse<any>) => console.log(response.data))
    .catch((err : AxiosError) => {
        console.log(err);
    })
   
}