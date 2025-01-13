import axios from '@/configs/AxiosConfig'
import {  AxiosInstance } from 'axios'
import Service from '@/services/Service';

class AuthenticationService implements Service {
    axios: AxiosInstance
    serviceName: string

    constructor(axios: AxiosInstance, serviceName: string) {
        this.axios = axios
        this.serviceName = serviceName
    }

    async authenticate(username: string, password: string) {
        return await this.axios.post(`/${this.serviceName}/api/authenticate`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => {
            console.log(response);            
            const data = response.data;
            return data;
        })
        .catch((error) => {
            console.error(error);
        })
    }
}

export default new AuthenticationService(axios, 'authentication-ms');