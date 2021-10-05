import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { User } from "../models/user";
import { UserResponse } from "../models/userResponse";

export const customRequest = (protocol: Method, formValues: User) => {

    axios({
        method: protocol,
        url: '/login',
        data: formValues,
        baseURL: 'https://reportingapp2.herokuapp.com/api'
    })
        .then((response: AxiosResponse<UserResponse>) => {
            console.log(response.data);
        })
        .catch((err: AxiosError) => {
            console.log(err);
        })
}

export const customRequestPromise = (
    protocol: Method,
    endpoint: string,
    formValues: User): Promise<UserResponse> => {

    return new Promise((resolve, reject) => {
        axios({
            method: protocol,
            url: endpoint,
            data: formValues,
            baseURL: 'https://reportingapp2.herokuapp.com/api/'
        }).then(
            (success: AxiosResponse<UserResponse>) => {
                //log success
                resolve(success.data);
            },
            //log error
            (error: AxiosError) => {
                reject(error);
            }
        ).catch(
            //log error
            (error: AxiosError) => {
                reject(error);
            }
        )
    })
}

export const sampleResquest = async (protocol: Method, endpoint: string, formValues : User) => {
    try {
        const { data } = await axios({
            method: protocol,
            url: endpoint,
            data: formValues,
            baseURL: 'https://reportingapp2.herokuapp.com/api/'
        });
        
        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        } else {
            console.log(error);
        }
    }
}

