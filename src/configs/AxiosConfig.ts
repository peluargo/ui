import axios from "axios"

export default axios.create({
    baseURL: process.env.GATEWAY_PORT
})