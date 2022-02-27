import axios from "axios"
import { Profiler } from "react"



export async function register(values) {
    const endpoint = 'http://localhost:8000/auth/register/'
    const response = await axios.post(endpoint,{
        name: values.name,
        email: values.email,
        password: values.password1,
        password2: values.password2
    })
    if (response.status === 201){
        console.log(response)
    }

}



export async function profiler(token) {
    const endpoint = 'http://localhost:8000/auth/register/'
    const response = await axios.get(endpoint, {
        headers: {
            'Authorization': token
        }
    }).then(response => {
        
    })
}